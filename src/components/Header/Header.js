import Link from 'next/link';
import { useSnipcart } from 'use-snipcart';
import { FaShoppingCart } from 'react-icons/fa';

import Container from '@components/Container';

import styles from './Header.module.scss';

const Header = () => {
  const { cart = {} } = useSnipcart();
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <p className={styles.headerTitle}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </p>
        <ul className={styles.headerLinks}>
          <li>
            <Link href="/categories/suscripciones">
              <a>Suscripciones</a>
            </Link>
          </li>
          <li>
            <Link href="/categories/paquetes-one2one">
              <a>One2one</a>
            </Link>
          </li>
          <li>
            <Link href="/categories/mensualidad">
              <a>Mensualidad</a>
            </Link>
          </li>
          <li>
            <Link href="/categories/bimestre">
              <a>Bimestre</a>
            </Link>
          </li>
          <li>
            <Link href="/categories/servicios">
              <a>Servicios</a>
            </Link>
          </li>
          <li>
            <Link href="/categories/productos">
              <a>Productos</a>
            </Link>
          </li>
          <li>
            <Link href="/categories/examenes">
              <a>Exámenes</a>
            </Link>
          </li>
        </ul>
        <p className={styles.headerCart}>
          <button className="snipcart-checkout">
            <FaShoppingCart />
            <span>
              ${ cart.subtotal?.toFixed(2) }
            </span>
          </button>
        </p>
        <ul className={styles.headerLocales}>
          <li>
            <Link href="#">
              <a>
                ES
              </a>
            </Link>
          </li>
        </ul>
      </Container>
    </header>
  )
}

export default Header;