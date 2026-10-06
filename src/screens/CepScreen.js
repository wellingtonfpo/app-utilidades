import { useState } from 'react';
import { Keyboard } from 'react-native';
import Tela from '../components/Tela';
import Campo from '../components/Campo';
import Botao from '../components/Botao';
import CardResultado from '../components/CardResultado';
import LinhaInfo from '../components/LinhaInfo';
import MensagemErro from '../components/MensagemErro';
import { buscarCep } from '../services/api';
import cores from '../styles/cores';

export default function CepScreen() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');

  // Mantém apenas os números digitados (remove traço, ponto, espaço...)
  // Por isso o campo aceita 9 caracteres: "00000-000" vira "00000000".
  function alterarCep(texto) {
    setCep(texto.replace(/\D/g, ''));
  }

  async function consultar() {
    Keyboard.dismiss();

    if (cep.length !== 8) {
      setErro('O CEP deve ter 8 números.');
      setEndereco(null);
      return;
    }

    setCarregando(true);
    setErro('');
    setEndereco(null);

    try {
      const dados = await buscarCep(cep);
      setEndereco(dados);
    } catch (e) {
      setErro(e.message || 'Erro ao consultar o CEP.');
    } finally {
      setCarregando(false);
    }
  }

  return (
    <Tela>
      <Campo
        label="CEP"
        placeholder="Ex.: 01001000"
        keyboardType="numeric"
        maxLength={9}
        value={cep}
        onChangeText={alterarCep}
        onSubmitEditing={consultar}
      />
      <Botao titulo="Buscar endereço" cor={cores.cep} onPress={consultar} carregando={carregando} />

      <MensagemErro mensagem={erro} />

      {endereco && (
        <CardResultado titulo={`CEP ${endereco.cep}`} cor={cores.cep}>
          {/* O operador || mostra "-" quando o campo vem vazio (CEP de cidade pequena) */}
          <LinhaInfo label="Logradouro" valor={endereco.logradouro || '-'} />
          <LinhaInfo label="Complemento" valor={endereco.complemento || '-'} />
          <LinhaInfo label="Bairro" valor={endereco.bairro || '-'} />
          <LinhaInfo label="Cidade" valor={endereco.localidade} />
          <LinhaInfo label="Estado" valor={endereco.estado ? `${endereco.estado} (${endereco.uf})` : endereco.uf} />
          <LinhaInfo label="DDD" valor={endereco.ddd || '-'} />
        </CardResultado>
      )}
    </Tela>
  );
}
