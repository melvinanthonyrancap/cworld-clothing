const INTIAL_STATE = {
    sections:[{
        title: 'hats',
        imageUrl: 'https://images.unsplash.com/photo-1523480773376-9d46ea986a7d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2020&q=80',
        id: 1,
        linkUrl: 'shop/hats'
      },
      {
        title: 'jackets',
        imageUrl: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        id: 2,
        linkUrl: 'shop/jackets'
      },
      {
        title: 'sneakers',
        imageUrl: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        id: 3,
        linkUrl: 'shop/sneakers'
      },
      {
        title: 'womens',
        imageUrl: 'https://images.unsplash.com/photo-1555008922-6d2e18b4f0e1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        size: 'large',
        id: 4, 
        linkUrl: 'shop/womens'
      },
      {
        title: 'mens',
        imageUrl: 'https://images.unsplash.com/photo-1610386715606-95eaf87365f3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens'
      }]
}

const directoryReducer = (state = INTIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default directoryReducer;