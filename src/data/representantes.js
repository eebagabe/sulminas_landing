// Fonte: sulminaslaticinios.com.br/encontre-um-representante (cópia fiel)
const comercial = { name: 'Área Comercial', phones: ['(11) 2842-5300', '(11) 9 4229-7284 (WhatsApp)'], emails: ['comercial@queijosroseli.com.br'] }

export const regions = [
  {
    region: 'Norte',
    states: [
      { state: 'Acre', reps: [{ area: 'Rio Branco e demais cidades', name: 'Thiago Gomes', phones: ['(68) 99968-5240'], emails: ['thiagom.gomes@hotmail.com'] }] },
      { state: 'Amazonas', reps: [{ area: 'Manaus e demais cidades', name: 'David', phones: ['(92) 9 8165-1947'], emails: ['souza.guimaraesrps@gmail.com'] }] },
      { state: 'Roraima', reps: [{ area: 'Boa Vista e demais cidades', name: 'David', phones: ['(92) 9 8165-1947'], emails: ['souza.guimaraesrps@gmail.com'] }] },
      { state: 'Rondônia', reps: [{ area: 'Porto Velho e demais cidades', name: 'Manuel Anastacio', phones: ['(69) 99214-9301', '(69) 3221-2060'], emails: ['ma.recom@hotmail.com'] }] },
      { state: 'Pará', reps: [{ area: 'Belém e Região', name: 'Bruno Lima', phones: ['(91) 98362-9852'], emails: ['bruno@rpcgestaocomercial.com.br', 'vendas02@rpcgestaocomercial.com.br'] }] },
      { state: 'Amapá', reps: [{ area: 'Macapá e demais cidades', name: 'Bruno Lima', phones: ['(91) 9 8362-9852'], emails: ['bruno@rpcgestaocomercial.com.br', 'vendas02@rpcgestaocomercial.com.br'] }] },
      { state: 'Tocantins', reps: [{ area: 'Palmas e demais cidades', name: 'Fernando Arantes', phones: ['(63) 9 9206-6412', '(63) 9 8133-0878'], emails: ['fernando_arantes_1973@hotmail.com'] }] },
    ],
  },
  {
    region: 'Centro-Oeste',
    states: [
      { state: 'Goiás', reps: [{ area: 'Goiânia e demais cidades', name: 'Antonio Rodovalho', phones: ['(62) 9 8110-3456', '(62) 9 9832-6237'], emails: ['ar3representacoes@gmail.com', 'ar3.admvendas@gmail.com'] }] },
      { state: 'Mato Grosso', reps: [{ area: 'Cuiabá e demais cidades', name: 'Geraldo Marin', phones: ['(65) 9 9287-6227'], emails: ['geraldomarin16@gmail.com'] }] },
      { state: 'Mato Grosso do Sul', reps: [{ area: 'Campo Grande e demais cidades', ...comercial }] },
      { state: 'Distrito Federal', reps: [{ area: 'Brasília e Região', name: 'Antonio Rodovalho', phones: ['(62) 9 8110-3456', '(62) 9 9832-6237'], emails: ['ar3representacoes@gmail.com', 'ar3.admvendas@gmail.com'] }] },
    ],
  },
  {
    region: 'Sudeste',
    states: [
      {
        state: 'São Paulo',
        reps: [
          { area: 'Capital e demais cidades', name: 'Matriz São Paulo', phones: ['(11) 2842-5300 (Ramal 5337)', '(11) 9 4229-7284 (WhatsApp)'], emails: ['comercial@queijosroseli.com.br'] },
          { area: 'Americana/Limeira e Região', ...comercial },
          { area: 'Jales e Região', ...comercial },
        ],
      },
      {
        state: 'Rio de Janeiro',
        reps: [
          { area: 'Cabo Frio e Região', name: 'Grace Fuller', phones: ['(27) 9 9956-1257'], emails: ['gracefullerb@hotmail.com'] },
          { area: 'Capital, Duque de Caxias e Região', name: 'Renan', phones: ['(21) 97021-9673'], emails: ['rguimaraesdesousa@gmail.com'] },
        ],
      },
      {
        state: 'Minas Gerais',
        reps: [
          { area: 'Belo Horizonte e demais cidades', name: 'Alvaro Representações', phones: ['(31) 98429-6049', '(31) 93227-7212'], emails: ['alvaro@alvarorepresentacoes.com.br'] },
          { area: 'Triângulo Mineiro', name: 'João Batista', phones: ['(34) 9233-9986'], emails: ['jcalixtorepresentacoes@gmail.com'] },
        ],
      },
      { state: 'Espírito Santo', reps: [{ area: 'Vitória e demais cidades', name: 'Alex de Moura', phones: ['(27) 99855-4850', '(27) 99731-4172'], emails: ['capixabarepresenta@gmail.com'] }] },
    ],
  },
  {
    region: 'Sul',
    states: [
      { state: 'Rio Grande do Sul', reps: [{ area: 'Porto Alegre e demais cidades', name: 'Guilherme Blum', phones: ['(51) 3012-0727', '(51) 9 9137-4770', '(51) 9 8114-2404'], emails: ['mablum.crm@gmail.com', 'guilherme.blum@hotmail.com', 'sirlei.blum@gmail.com'] }] },
      { state: 'Santa Catarina', reps: [{ area: 'Florianópolis e demais cidades', ...comercial }] },
      {
        state: 'Paraná',
        reps: [{ area: 'Curitiba, Londrina/Maringá e Região', name: 'Sílvio Amorim', phones: ['(43) 98404-2009'], emails: ['silviolondri@gmail.com'] }],
      },
    ],
  },
  {
    region: 'Nordeste',
    states: [
      { state: 'Maranhão', reps: [{ area: 'São Luís e demais cidades', name: 'Francisco Ferreira', phones: ['(99) 8809-1920'], emails: ['francisco.f.2013@hotmail.com'] }] },
      { state: 'Piauí', reps: [{ area: 'Teresina e demais cidades', name: 'Gustavo Sobral', phones: ['(85) 9 9746-5410'], emails: ['gustavocsobral@hotmail.com', 'alfarepce@gmail.com'] }] },
      {
        state: 'Bahia',
        reps: [
          { area: 'Salvador e Região', name: 'Gilter Sampaio', phones: ['(71) 9307-5000'], emails: ['gilter.sampaio@gmail.com'] },
          { area: 'Sul Baiano', name: 'Klauton', phones: ['(77) 9 118-1085'], emails: ['ksamorim.rep@gmail.com'] },
          { area: 'Oeste Baiano', name: 'Herivelton', phones: ['(77) 9 119-3020'], emails: ['hrsodrerep@gmail.com'] },
        ],
      },
      { state: 'Ceará', reps: [{ area: 'Fortaleza e demais cidades', name: 'Gustavo Sobral', phones: ['(85) 9 9746-5410'], emails: ['gustavocsobral@hotmail.com', 'alfarepce@gmail.com'] }] },
      { state: 'Rio Grande do Norte', reps: [{ area: 'Natal e demais cidades', name: 'Franklin Queiroga', phones: ['(83) 9 9421-7757'], emails: ['falconlogrepresentacoes@gmail.com'] }] },
      { state: 'Paraíba', reps: [{ area: 'João Pessoa e Região', name: 'Franklin Queiroga', phones: ['(83) 9 9421-7757'], emails: ['falconlogrepresentacoes@gmail.com'] }] },
      { state: 'Pernambuco', reps: [{ area: 'Recife e demais cidades', name: 'Marcele Monte ou Leonardo', phones: ['(81) 9 9507-5877', '(81) 9 9827-9359'], emails: ['monteriosrepresentacoes@gmail.com'] }] },
      { state: 'Alagoas', reps: [{ area: 'Alagoas e demais cidades', name: 'Emerson Machado', phones: ['(82) 9 9677-9392', '(82) 9 8134-5046'], emails: ['machadoecostarep@gmail.com', 'machadoecostarep@outlook.com'] }] },
      { state: 'Sergipe', reps: [{ area: 'Aracaju e demais cidades', name: 'Tiago Bastos', phones: ['(79) 9 9861-7041', '(79) 9 8131-1486'], emails: ['tiagofranca1905@gmail.com'] }] },
    ],
  },
]
