import { Layout, Space, Typography, Button } from 'antd';
import styles from './index.module.css'
import { TeamOutlined } from '@ant-design/icons';

export const Header = () => {
  return (
    <Layout.Header className={ styles.teamIcon}>
      <Space>
        <TeamOutlined className={ styles.teamIcon} />
        <Button type='primary'>Click</Button>
      </Space>
    </Layout.Header>
  )
}
