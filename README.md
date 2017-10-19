# BlueHunter

Desafio enviado pela IBM
[Running API](https://secret-island-80024.herokuapp.com/)

## What has already been implemented  

### Book
	* create[POST] <server>/books/
	* edit[PUT] <server>/books/
	*  delete [DELETE] <server>/books/
	* list all [GET] <server>/books/
	* Find by Title [GET] <server>/books/by-title/{title}
	* Find by Author [GET] <server>/books/by-author/{author}
	* Find by Id [GET] <server>/books/by-id/{id}
### Users
	* create[POST] <server>/users/
	* edit[PUT] <server>/users/
	* delete [DELETE] <server>/users/
	* list all [GET] <server>/users/
	* Find by Name [GET] <server>/users/by-name/{name}
	* Find by Id [GET] <server>/users/by-id/{id}



## Prerequisites

Install NodeJS and MongoDB 

```
node --version
mongod
```

## Installing

clone this project

```
git clone https://github.com/esthinri/bluehunterapi.git
```

go to directory 

```
cd <dir_project>
```

and execute

```
node install
```

run the project

```
npm start
```


## Running the tests

Not implement yet

## Built With

* [NodeJS](https://nodejs.org/dist/latest-v8.x/docs/api/) - The Framework Used
* [MongoDB](https://docs.mongodb.com/?_ga=2.68280726.640505578.1508357241-694770185.1508357241) - The Database Used

## Authors

* **Esther Angelica Hinrichsen** - *Initial work* - [esthinri](https://github.com/esthinri)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
