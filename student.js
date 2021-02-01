"use strict";

class Programme {
    code;
    name;

    constructor(code, name){
        this.code;
        this.name;
    }
}

class Student {
    id;
    name;
    programme;

    constructor(id, name, programme) {
        this.id = id;
        this.name = name;
        this.programme = programme;
    }
    tableRow() {
        return `<tr><td>${this.id}</td><td>${this.name}</td><td>${this.programme.name}</td></tr>`;
    }
}

var programme = new Programme("123", "MSc Computing");

var students = [
    new Student("001", "Shoaib", programme),
    new Student("002", "Iqbal", programme),
    new Student("003", "Umar", programme)
];

function printStudents() {
    var html =
    `<table border ="1">
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Programme</th>
        </tr>`;
        for (var student of students){
            html += student.tableRow();
        }
    html += `</table>`;
    var main = document.getElementById("main");
    main.innerHTML = html;
}