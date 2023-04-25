import { SkillsProps } from '../../models/SkillsProps'
import { ReactComponent as CSS } from '../../assets/skills/css-3.svg'
import { ReactComponent as HTML } from '../../assets/skills/html5.svg'
import { ReactComponent as JS } from '../../assets/skills/javascript.svg'
import { ReactComponent as Web3 } from '../../assets/skills/web3.svg'
import { ReactComponent as React } from '../../assets/skills/react.svg'
import { ReactComponent as Next } from '../../assets/skills/next-js.svg'
import { ReactComponent as Redux } from '../../assets/skills/redux.svg'
import { ReactComponent as Tailwind } from '../../assets/skills/tailwind.svg'
import { ReactComponent as Nodejs } from '../../assets/skills/nodejs.svg'
import { ReactComponent as CSharp } from '../../assets/skills/c#.svg'
import { ReactComponent as Dotnet } from '../../assets/skills/dotnet.svg'
import { ReactComponent as DotnetCore } from '../../assets/skills/dotnetcore.svg'
import { ReactComponent as Git } from '../../assets/skills/git.svg'
import { ReactComponent as MongoDB } from '../../assets/skills/mongodb.svg'
import { ReactComponent as Flutter } from '../../assets/skills/flutter.svg'
import { ReactComponent as Bootstrap } from '../../assets/skills/bootstrap.svg'
import { ReactComponent as Rest } from '../../assets/skills/rest.svg'
import { ReactComponent as Jquery } from '../../assets/skills/jquery.svg'
import { ReactComponent as TypeScript } from '../../assets/skills/typescript.svg'

export const SkillsList: SkillsProps[] = [
  { category: 'Web', value: 'HTML', image: HTML },
  { category: 'Web', value: 'CSS', image: CSS },
  { category: 'Web', value: 'Web3', image: Web3 },
  { category: 'Web', value: 'JavaScript', image: JS },
  { category: 'Web', value: 'TypeScript', image: TypeScript },
  { category: 'Web', value: 'React.js', image: React },
  { category: 'Web', value: 'Next.js', image: Next },
  { category: 'Web', value: 'React Redux', image: Redux },
  { category: 'Web', value: 'Bootstrap', image: Bootstrap },
  { category: 'Web', value: 'Tailwind', image: Tailwind },
  { category: 'Web', value: 'Jquery', image: Jquery },
  { category: 'Backend', value: 'C#', image: CSharp },
  { category: 'Mobile', value: 'React Native', image: React },
  { category: 'Mobile', value: 'Flutter', image: Flutter },
  { category: 'Backend', value: 'Node.js', image: Nodejs },
  { category: 'Backend', value: '.NET', image: Dotnet },
  { category: 'Backend', value: '.NET Core', image: DotnetCore },
  // { category: 'General', value: 'MVC' },
  { category: 'General', value: 'Git', image: Git },
  // { category: 'Backend', value: 'SQL' },
  { category: 'Backend', value: 'MongoDB', image: MongoDB },
  // { category: 'General', value: 'SOAP Web Services' },
  { category: 'General', value: 'REST' , image: Rest},
  // { category: 'General', value: 'JSON' },
]
