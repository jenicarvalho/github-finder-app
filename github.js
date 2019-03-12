class Github {
  constructor() {
    this.client_id =  'a64ce0c4c8391687959a';
    this.client_secret =  'e6450c3dde8b20268649d1b2085a50206e026438';
  }

  async getUser(user) {
    const clienteInfos = `${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`;
    const profileResponse = await fetch(`https://api.github.com/users/${clienteInfos}`)
    const profile = await profileResponse.json();

    //return { profile: profile } 
    return { profile }
  }

}