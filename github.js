class Github {
  constructor() {
    this.client_id =  'a64ce0c4c8391687959a';
    this.client_secret =  'e6450c3dde8b20268649d1b2085a50206e026438';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const clienteInfos = `${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`;
    const profileResponse = await fetch(`https://api.github.com/users/${clienteInfos}`)
    const profile = await profileResponse.json();
    
    const reposInfos = `${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`;
    const repoResponse = await fetch(`https://api.github.com/users/${reposInfos}`)
    const repos = await repoResponse.json();

    //return { profile: profile } 
    return { profile, repos }
  }

}