import Image from 'next/image';
import Logo from '../../assets/logogn.jpg';
import Styles from './menu.module.css';
import {
    HomeOutlined,
    FileDoneOutlined,
    UserOutlined,
    LineChartOutlined,
    ProfileOutlined,
} from '@ant-design/icons';
import Link from 'next/link';

export default function Menu() {
    return (
        <div className={Styles.orange}>
            <Image src={Logo} className={Styles.logo} />
            <div className={Styles.menu}>
                <Link href="/qualquer">
                    <div className={Styles.item}>
                        <HomeOutlined className={Styles.icons} />
                        <p className={Styles.texto}> Início da tela</p>
                    </div>
                </Link>
                <Link href="/pedidos">

                    <div className={Styles.item}>
                        <FileDoneOutlined className={Styles.icons} />
                        <p className={Styles.texto}> Pedidos</p>
                    </div>
                </Link>
                <div className={Styles.item}>
                    <  LineChartOutlined className={Styles.icons} />
                    <p className={Styles.texto}> Financeiro</p>
                </div >

                <div className={Styles.item}>
                    < ProfileOutlined className={Styles.icons} />
                    <p className={Styles.texto}> Cardápio</p>
                </div >

                <div className={Styles.item}>
                    <UserOutlined className={Styles.icons} />
                    <p className={Styles.texto}> Perfil</p>
                </div >
            </div >
        </div >
    );
}