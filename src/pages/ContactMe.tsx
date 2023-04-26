import { FC, useState, useEffect, useRef } from 'react'
import Input from '../components/Input'
import Button from '../components/button'
import { validateMail } from '../helpers/validation'
import Heading from '../components/Heading'
import { validateField } from '../helpers/checkEmpy'
import { useAxios } from '../helpers/useAxios'
import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID as string
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID as string
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY as string

export const ContactMe: FC = () => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [subject, setSubject] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [fade, setFade] = useState<boolean>(false)
  const [validName, setValidName] = useState<boolean>(true)
  const [validEmail, setValidEmail] = useState<boolean>(true)
  const [validSubject, setValidSubject] = useState<boolean>(true)
  const [validMessage, setValidMessage] = useState<boolean>(true)
  const [isClicked, setIsClicked] = useState<boolean>(false)
  const { loading, error, success, fetch } = useAxios()
  const ref = useRef<HTMLElement>(null)
  const form = useRef<any>();

  const checkForm = () => {
    if (name !== '' && email !== '' && subject !== '' && message !== '') {
      return true
    }
    return false
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault()
    if (validName && validEmail && validSubject && validMessage && checkForm() && !isClicked) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then((result: any) => {
          toast.success('Email sent successfully!',
            {
              theme: 'dark',
            }
          )
          setIsClicked(true)
        }, (error: any) => {
          // console.log(error.text);
        });
    }
    if (!loading && success) clearState()
  }
  const clearState = () => {
    setName('')
    setEmail('')
    setSubject('')
    setMessage('')
  }
  useEffect(() => {
    ref.current?.focus()
  }, [])

  return (
    <section className="contact">
      <ToastContainer />
      <div className="contact-heading-wrapper">
        <Heading lines={['Contact me'.split(' ')]} />
      </div>
      <form ref={form} onSubmit={handleSubmit} className="contact-grid">
        <div className="input">
          <Input
            forwardRef={ref}
            name='name'
            value={name}
            onChange={e => {
              setValidName(validateField(e))
              setName(e)
            }}
            placeholder={'Name'}
            type="text"
            className={validName ? '' : 'error'}
          />
        </div>
        <div className="input">
          <Input
            value={email}
            name='email'
            onChange={e => {
              setValidEmail(validateMail(e))
              setEmail(e)
            }}
            placeholder={'E-mail'}
            type="email"
            className={validEmail ? '' : 'error'}
          />
        </div>
        <div className="input col-span-2">
          <Input
            value={subject}
            name='subject'
            onChange={e => {
              setValidSubject(validateField(e))
              setSubject(e)
            }}
            className={validSubject ? '' : 'error'}
            type="text"
            placeholder={'Subject'}
          />
        </div>
        <div className="input col-span-2 message-box">
          <textarea
            value={message}
            name='message'
            onChange={e => {
              setValidMessage(validateField(e.target.value))
              setMessage(e.target.value)
            }}
            className={validMessage ? '' : 'error'}
            placeholder={'Message'}
          />
        </div>
        {(success || error) && (
          <div
            className={
              'snackbar' +
              (fade ? ' fade' : '') +
              (error ? ' error' : '') +
              (success ? ' success' : '')
            }
          >
            <p>{error ? 'Something went wrong!' : 'Sent successfuly'}</p>
            <span
              onClick={() => {
                if (error) {
                  setFade(true)
                } else {
                  setFade(true)
                }
              }}
            >
              {error ? 'X' : <div>&#x2714;</div>}
            </span>
          </div>
        )}
        <div className="contact-button-wrapper row-end">
          <Button
            children={!isClicked ? 'Done' : 'Send message!'}
            type="submit"
            classname={'form-submit'}
          />
        </div>
      </form>
    </section>
  )
}

export default ContactMe
