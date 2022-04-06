# Curso de TypeScript: Programación Orientada a Objetos y Asincronismo

## configuraciones iniciales

> git init

> npm init -y

> npm i -D typescript ts-node

> npx tsc

> npx tsc --init

## Class

Las clases no son algo revolucionario en typescript, puesto que ya la versión 6 en 

adelante de ecmascript ya las soportan, ademas antes de eso tendriamos un 

comportamiento similar a las clases utilizando funciones.

	class MyDate {
		year: number;
		month: number;
		day: number;

		constructor(year: number, month: number, day: number) {
			this.year = year
			this.month = month
			this.day = day
		}
	}

	const myDate = new MyDate(2021,3,13)
	console.log({ myDate })
