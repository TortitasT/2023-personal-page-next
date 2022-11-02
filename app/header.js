'use client';

import Link from 'next/link'

export default function Header(props) {
  const menuNoAuth = (
    <div class="header__menu">
      <ul>
        <li>
          <Link href="/login">
            <span>Login</span>
          </Link>
        </li>
        <li>
          <Link href="/signup">
            <span>Sign Up</span>
          </Link>
        </li>
      </ul>
    </div>
  );

  const menuAuth = (
    <div class="header__menu">
      <ul>
        <li>
          <Link href="/profile">
            <span>Profile</span>
          </Link>
        </li>
        <li>
          <Link href="/logout">
            <span>Log out</span>
          </Link>
        </li>
      </ul>
    </div>
  );

  let menu;

  if (
    true
  ) {
    menu = menuAuth;
  } else {
    menu = menuNoAuth;
  }

  return (
    <header class="header">
      <div class="header__title">
        <span>Tortitas</span>
      </div>

      <nav>
        <ul>
          <li>
            <Link href="/" class={props.page === 0 ? "active" : ""}>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link href="/about" class={props.page === 1 ? "active" : ""}>
              <span>About</span>
            </Link>
          </li>
        </ul>
      </nav>

      {menu}
    </header>
  );
}
