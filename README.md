#API de avaliação <h1>

##Rotas <h2>

*POST -/api/states
Cria um estado a partir de um objeto enviado no body da requisição

*GET -/api/states
Retorna todos os estados

*GET -/api/states/{id}
Retorna o estado com o id passado no parametro da url

*PUT -/api/states/{id}
Atualiza o estado cujo id é o passado na url de acordo com os dados passados no corpo da requisição

*DELETE -/api/states/{id}
Deleta o estado cujo id é o passado na url


##A estrutura do objeto é a seguinte: <h2>


*id: inteiro que autoincrementa, não nulo e chave primária
*nome: string não nulo
*regiao: string não nulo
*populacao: inteiro não nulo
*area: float não nulo

```
{
    "id": "1",
    "nome": "Rio Grande do Norte",
    "regiao": "Nordeste",
    "populacao": 3409000,
    "capital": "Natal",
    "area": 52.797
}

```
```
{
    "id": 2,
    "nome": "Ceará",
    "regiao": "Nordeste",
    "capital": "Fortaleza",
    "populacao": 9240580,
    "area": 148894
}
```
##BAnco de dados <h2>

MySQL - dados devem ser inseridos no arquivo .env

```
MYSQL_HOST
MYSQL_PORT
MYSQL_USER
MYQL_PASSWORD
MYSQL_DB
PORT
```
