import type { FormItemRule } from 'element-plus'

interface ValidateProps {
  required: ({
    message,
    trigger,
  }: {
    message?: string
    trigger?: string | string[]
  }) => FormItemRule
  email: ({
    message,
    trigger,
  }: {
    message: string
    trigger?: string | string[]
  }) => FormItemRule
  password: ({ trigger }: { trigger?: string | string[] }) => FormItemRule
}

const required = ({
  message,
  trigger,
}: {
  message?: string
  trigger?: string | string[]
}) => {
  return {
    required: true,
    message,
    trigger: trigger ?? ['blur', 'change'],
  }
}

const email = ({
  message,
  trigger,
}: {
  message: string
  trigger?: string | string[]
}) => {
  return {
    pattern: /^[A-Za-z0-9._+-]+@[A-Za-z0-9.-]+\.[a-z]{2,4}$/,
    message,
    trigger: trigger ?? ['change', 'blur'],
  }
}

const password = ({
  message,
  trigger,
}: {
  message?: string
  trigger?: string | string[]
}) => {
  return {
    trigger: trigger ?? ['change', 'blur'],
    pattern:
      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,20}$/,
    message,
  }
}

export const Validate: ValidateProps = {
  required,
  email,
  password,
}
