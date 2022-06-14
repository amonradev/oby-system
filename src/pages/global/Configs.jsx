import '../../assets/css/@Global.css';
import { ConfigButtons } from '../../components/@Global/Buttons/ConfigButtons';
import { MainCard } from '../../components/@Global/Cards/MainCard';
import { Sidebar } from "../../components/@Global/Sidebar/Sidebar";
import { CardTitle } from '../../components/@Global/Titles/CardTitle';
import { PageTitle } from '../../components/@Global/Titles/PageTitle';

export const Configs = () => {
    return (
        <div className="page">
            <Sidebar active='configs' />
            <div className="page__body">
                <PageTitle title="Configurações" />
                <MainCard>
                    <CardTitle title="Comandos" />
                    <div className="main__content">
                        <div className="grid__buttons">
                            <ConfigButtons name="Cadastrar novo usuário" />
                            <ConfigButtons name="Excluir usuário" />
                            <ConfigButtons name="Contatar o suporte" />
                            <ConfigButtons name="Sair" />
                        </div>
                    </div>
                </MainCard>
            </div>
        </div>
    );
}