export const validateField = (value: string | null | undefined): boolean => {
  return !(value === '' || value === undefined || value === null)
}
