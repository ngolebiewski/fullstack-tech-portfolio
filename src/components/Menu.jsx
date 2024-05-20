import { Anchor } from 'antd';

const Menu = () => {

  return (
    <header className="shadow-bottom hacker-font">
      {/* <div className="navigation sub-header">
        <div className="main-menu shadow-bottom hacker-font"> */}
        <div className="force-hacker-font">
        <Anchor
        direction="horizontal"
        items={[
          {
            key: 'part-1',
            href: '#part-1',
            title: 'Portfolio',
          },
          {
            key: 'part-2',
            href: '#part-2',
            title: 'Tech',
          },
          {
            key: 'part-3',
            href: '#part-3',
            title: 'About',
          },
          {
            key: 'contact',
            href: 'contact',
            title: 'Contact',
          },
        ]}
      />
      </div>
        {/* </div>
      </div> */}
    </header>
  );
};

export default Menu;
