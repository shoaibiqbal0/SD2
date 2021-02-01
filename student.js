"use strict";

class Student {
    id;
    name;

    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    tableRow() {
        return `<tr><td>${this.id}</td><td>${this.name}</td></tr>`;
    }
}
var students = [
    new Student("001", "Shoaib"),
    new Student("002", "Iqbal"),
    new Student("003", "Umar")
];

function printStudents() {
    var html =
    `<table border ="1">
        <tr>
            <th>ID</th>
            <th>Name</th>
        </tr>`;
        for (var student of students){
            html += student.tableRow();
        }
    html += "</table>";
    var main = document.getElementById("main");
    main.innerHTML = html;
}