'use client';

import Link from 'next/link'

export default function Footer() {
  return (
<footer class="footer">
      <ul>
        <li>
          <h2>Sitemap</h2>
        </li>
        <li>
          <Link href="/home">
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <span>About</span>
          </Link>
        </li>
        <li>
          <Link href="/login">
            <span>Login</span>
          </Link>
        </li>
        <li>
          <Link href="/signup">
            <span>Sign up</span>
          </Link>
        </li>
      </ul>

      <ul>
        <li>
          <h2>Social</h2>
        </li>
        <li>
          <Link href="https://twitter.com/tortitas_t" target="_blank" rel="noreferrer">
            <span>Twitter</span>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/tortitast" target="_blank" rel="noreferrer">
            <span>Github</span>
          </Link>
        </li>
        <li>
          <Link href="https://tortitas.itch.io/" target="_blank" rel="noreferrer">
            <span>Itch.io</span>
          </Link>
        </li>
      </ul>

      <ul>
        <li>
          <p>
            @tortitast <br />
            2022 - 2023
          </p>
        </li>
      </ul>
    </footer>
  );
}
