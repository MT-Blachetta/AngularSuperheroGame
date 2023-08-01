
export function getUsers() {

return fetch('http://decgn-pr-newbizz-poc:3000/users')
  .then(res => {
      if (!res.ok) {
        throw new Error(`Invalid response with status ${res.status}`)
      }
      return res;
    })
  .then(response => response.json()) // implicite return
  //.then(users => console.log(users));

}

async function showUsers(){
    const users = await getUsers();
    console.log('users',users);
}

showUsers();

//----------------

async function fetch('http://decegn-pr-newbizz-poc:3000', {method: 'POST', headers: {"Content-Type": 'application/json'}, body: JSON.stringify({id:'Michaelo', name: 'Michael', city:'Bochum'})});