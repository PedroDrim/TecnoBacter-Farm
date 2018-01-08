"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var list_1=require("../model/list"),person_1=require("../model/person"),_=require("lodash"),IndexRoute=function(){function e(e){this.router=e,this.createList(),this.routesForGET(),this.routesForPOST(),this.routesForPUT(),this.routesForDELETE()}return e.prototype.createList=function(){this.list=new list_1.List,this.list.addPerson(new person_1.Person("000-000-000-01","Joao",12)),this.list.addPerson(new person_1.Person("000-000-000-02","Maria",10)),this.list.addPerson(new person_1.Person("000-000-000-03","José",25))},e.prototype.routesForGET=function(){this.router.get("/",function(e,o){o.render("index",{prop:{title:"Express"}})})},e.prototype.routesForPOST=function(){var e=this;this.router.post("/",function(o,t){if(_.isEmpty(o.body))t.status(400).send("Não foi possivel adicionar o elemento, corpo vazio.");else{o.params.cpf;var s=new person_1.Person(o.body.cpf,o.body.name,o.body.age);e.list.addPerson(s)?t.send("Elemento adicionado com sucesso."):t.status(400).send("Não foi possivel adicionar o elemento, cpf já existente.")}}),this.router.post("/:cpf",function(o,t){var s=o.params.cpf,r=e.list.getPersonByCPF(s);_.isEmpty(r)?t.status(400).send("Não foi possivel encontrar o elemento."):t.json(r)}),this.router.post("/get/list",function(o,t){var s=e.list.getList();_.isEmpty(s)?t.status(400).send("Lista vazia."):t.json(s)})},e.prototype.routesForPUT=function(){var e=this;this.router.put("/",function(o,t){if(_.isEmpty(o.body))t.status(400).send("Não foi possivel atualizar o elemento, corpo vazio.");else{var s=new person_1.Person(o.body.cpf,o.body.name,o.body.age);e.list.updatePerson(s)?t.send("Elemento atualizado com sucesso."):t.status(400).send("Não foi possivel atualizar o elemento, cpf já existente.")}})},e.prototype.routesForDELETE=function(){var e=this;this.router.delete("/:cpf",function(o,t){var s=o.params.cpf;e.list.removePersonByCPF(s)?t.send("Elemento removido com sucesso."):t.status(400).send("Não foi possivel remover o elemento, cpf inexistente.")})},e}();exports.IndexRoute=IndexRoute;