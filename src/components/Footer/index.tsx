import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
const Footer: React.FC = () => {
  const defaultMessage = 'stufz出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Ant Design Pro',
          title: '编程导航',
          href: 'https://code-nav.cn',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/fanzher',
          blankTarget: true,
        },
        {
          key: 'Ant Design',
          title: '语雀',
          href: 'https://www.yuque.com/fanz/study/kz9nyyxk8qz0r0xr/edit#jYMvc',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
