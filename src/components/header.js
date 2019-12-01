/** @jsx jsx */
import { jsx } from 'theme-ui';
import Link from 'next/link';
import { Container, NavLink } from '@theme-ui/components';

export const Header = () => (
  <Container
    as="header"
    sx={{
      display: 'grid',
      gridGap: 3,
      mx: 'auto',
      px: 3,
      py: 3,
      gridAutoFlow: 'row',
      gridTemplateColumns: ['repeat(2, 1fr)', 'repeat(3, 1fr)'],
      variant: 'styles.header',
    }}
  >
    <div
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gridColumnStart: [1, 2],
        gridColumnEnd: [3, 3],
        order: [0, 1],
      }}
    >
      <Link href="/">
        <a title="Home">
          <img
            alt="Lana Medved"
            src="https://contrast.now.sh/fff/409?size=48&fontSize=2&baseline=2&fontWeight=900&radius=32&text=LM"
          />
          <span
            sx={{
              position: 'absolute',
              width: 1,
              height: 1,
              overflow: 'hidden',
              top: -9999,
            }}
          >
            Home
          </span>
        </a>
      </Link>
    </div>
    <div
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        mx: -2,
      }}
    >
      <Link href="/" passHref>
        <NavLink title="Home">Home</NavLink>
      </Link>
      <Link href="/cv" passHref>
        <NavLink title="CV">CV</NavLink>
      </Link>
    </div>
    <div
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        order: 2,
        mx: -2,
      }}
    >
      <Link href="/about" passHref>
        <NavLink title="About">About</NavLink>
      </Link>
      <Link href="/contact" passHref>
        <NavLink title="Contact">Contact</NavLink>
      </Link>
    </div>
  </Container>
);