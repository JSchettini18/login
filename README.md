Relatório da Atividade
Objetivo da Atividade
Implementar uma tela de login com a capacidade de:
- Registrar novos usuários.
- Verificar se as credenciais de login são válidas.

Passos Executados
1 Alteração do Componente:
- O componente Login.jsx foi modificado para suportar dois modos: Login e Cadastro.
- Foi criado um estado isLoginMode para alternar entre o modo de login e o de cadastro.

2 Cadastro:
-Quando o usuário insere as credenciais no modo de cadastro, as informações são validadas e armazenadas no localStorage. Uma mensagem de confirmação de registro bem-sucedido é exibida.

3 Verificação de Autenticidade no Login:
- Quando o usuário tenta fazer login, as credenciais são verificadas comparando com as armazenadas no localStorage. Se as credenciais estiverem corretas, uma mensagem de sucesso é exibida. Caso contrário, uma mensagem de erro é mostrada.

Resultado
A funcionalidade de cadastro foi implementada com sucesso.
A verificação de autenticidade para o login foi concluída. O sistema identifica corretamente se as credenciais inseridas correspondem às registradas no sistema.
