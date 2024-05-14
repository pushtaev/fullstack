import { Button, Form } from 'antd'

type Props = {
    children: React.ReactNode;
    htmlType?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
    type?: "link" | "text" | "default" | "primary" | "dashed" | undefined;
    danger?: boolean;
    loading?: boolean;
    shape?: "circle" | "default" | "round" | undefined;
    icon?: React.ReactNode;
}

export const CustomButton = ({ 
    children, 
    htmlType = 'button',
    type,
    danger,
    loading,
    shape,
    icon,
    onClick
}: Props ) => {
  return (
    <Form.Item>
        <Button 
        htmlType={ htmlType }
        type={ type }
        danger={ danger }
        loading={ loading }
        size="large"
        shape={ shape }
        onClick={ onClick }
        icon= { icon }
        >{ children }</Button>
    </Form.Item>
  )
}
