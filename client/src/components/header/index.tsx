import { Layout, Space, Typography, Button } from 'antd';
import styles from './index.module.css'
import { TeamOutlined } from '@ant-design/icons';
import { CustomButton } from '../custom-button';

export const Header = () => {
  return (
    <Layout.Header className={ styles.teamIcon}>
      <Space>
        <TeamOutlined className={ styles.teamIcon} />
        <CustomButton type='primary'>
          <Typography.Title level={1}>Сотрудники</Typography.Title>
        </CustomButton>
      </Space>
    </Layout.Header>
  )
}
