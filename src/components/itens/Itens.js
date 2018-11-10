import React from 'react';
import { Context } from '../../providers/Provider';
import Item from "../item/Item";
import './Itens.css'
import Carregando from '../carregando/Carregando';

class Itens extends React.Component {
    render() {
        return (<Context.Consumer>
            {(context) => (<div id="conteudo">{!context[this.props.abaAtiva] ?
                <Carregando /> :
                context[this.props.abaAtiva].map((item) => {
                    return <Item thumbnail={item.thumbnail} titulo={item.title} timestampCriacao={item.created} autor={item.author_fullname} dominio={item.domain} />;
                })}</div>)}
        </Context.Consumer>);
    }
}

export default Itens;