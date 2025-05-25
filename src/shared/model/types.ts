export type Person = {
	id: string
	name: string
	age: number
}

export type PersonalData = {
	parent: Person
	children: Person[]
}
