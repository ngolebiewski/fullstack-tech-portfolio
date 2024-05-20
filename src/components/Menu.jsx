import { Anchor } from 'antd';

const Menu = () => {

  return (
    <header className="shadow-bottom hacker-font">

      <div className="bump-it-over">
        <Anchor
          direction="horizontal"
          items={[
            {
              key: 'top',
              href: '#top',
              title: 'Top',
            },
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

          ]}
        />
      </div>

    </header>
  );
};

export default Menu;
