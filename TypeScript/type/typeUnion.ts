function printId(id: number | string) {
    console.log(id);
}

printId(11);
printId(`ID:11`);


type Identity = {
    id: number | string,
    name: string,
};

type Contact = {
    name: string,
    email: string,
    phone: string,
};

type IdentityOrContact = Identity | Contact;

const id: IdentityOrContact = {
    id: `111`,
    name: `yasuaki`,
};

const contact: IdentityOrContact = {
    name: `yasuaki`,
    email: `h23ms416@hiroaski-u.ac.jp`,
    phone: `080-9612-7288`,
};


