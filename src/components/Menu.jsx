import { Anchor } from 'antd';

const Menu = () => {

  return (
    <header className="shadow-bottom hacker-font">

      <div className="force-hacker-font bump-it-over">
        <Anchor
          direction="horizontal"
          items={[
            {
              key: 'portfolio',
              href: '#portfolio',
              title: 'Portfolio',
            },
            {
              key: 'tech',
              href: '#tech',
              title: 'Tech',
            },
            {
              key: 'about',
              href: '#about',
              title: 'About',
            },
            {
              key: 'contact',
              href: '#contact',
              title: 'Contact',
            },
            {
              key: 'top',
              href: '#top',
              title: 'Top',
            },
          ]}
        />
      </div>

    </header>
  );
};

export default Menu;
