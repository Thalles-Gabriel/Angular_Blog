export interface CardContent {
  title: string,
  content: string,
  createdAt: string,
  imageUrl: string
}

export const PostsArray: Array<CardContent> = [
  {
    title: 'Lorem ipsum dolor sit amet',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean et tortor at risus viverra adipiscing at in. Sit amet mauris commodo quis imperdiet massa tincidunt nunc. Amet justo donec enim diam vulputate ut. Senectus et netus et malesuada fames ac. Etiam tempor orci eu lobortis elementum nibh tellus molestie. Duis ut diam quam nulla. Sem et tortor consequat id porta nibh venenatis cras. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Pretium vulputate sapien nec sagittis aliquam malesuada. Ut tellus elementum sagittis vitae. Integer quis auctor elit sed vulputate mi sit amet mauris. In eu mi bibendum neque egestas congue quisque egestas diam. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Pellentesque eu tincidunt tortor aliquam nulla. Porta lorem mollis aliquam ut porttitor leo a diam.',
    createdAt: new Date(Math.floor(Math.random() * Date.now())).toLocaleDateString(),
    imageUrl: 'https://picsum.photos/seed/first/800/450'
  },

  {
    title: 'Egestas tellus rutrum',
    content: 'Auctor neque vitae tempus quam pellentesque. Urna porttitor rhoncus dolor purus non enim praesent elementum. Adipiscing at in tellus integer feugiat scelerisque varius morbi. Sagittis nisl rhoncus mattis rhoncus urna. Vitae purus faucibus ornare suspendisse sed nisi lacus sed. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Aliquam ut porttitor leo a diam sollicitudin tempor. Diam quam nulla porttitor massa id neque aliquam. Nibh mauris cursus mattis molestie a. Purus ut faucibus pulvinar elementum integer enim neque. Scelerisque purus semper eget duis at tellus at urna condimentum. A scelerisque purus semper eget duis at. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam.',
    createdAt: new Date(Math.floor(Math.random() * Date.now())).toLocaleDateString(),
    imageUrl: 'https://picsum.photos/seed/second/800/450'
  },

  {
    title: 'Nulla facilisi etiam dignissim',
    content: 'Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Neque volutpat ac tincidunt vitae semper quis lectus. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Curabitur vitae nunc sed velit dignissim sodales ut. Augue lacus viverra vitae congue eu consequat ac. Cras sed felis eget velit. Sit amet risus nullam eget felis eget nunc. Sed arcu non odio euismod lacinia at. Mattis nunc sed blandit libero volutpat sed cras ornare. Vel pretium lectus quam id leo. Purus semper eget duis at tellus.',
    createdAt: new Date(Math.floor(Math.random() * Date.now())).toLocaleDateString(),
    imageUrl: 'https://picsum.photos/seed/third/800/450'
  },

  {
    title: 'Id aliquet risus feugiat in ante metus dictum at tempor.',
    content: 'Id aliquet risus feugiat in ante metus dictum at tempor. Viverra orci sagittis eu volutpat odio facilisis mauris sit. Tellus cras adipiscing enim eu turpis. Sodales ut etiam sit amet. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Sollicitudin ac orci phasellus egestas tellus. Ipsum consequat nisl vel pretium lectus quam id leo in. Tincidunt ornare massa eget egestas. Volutpat sed cras ornare arcu dui vivamus arcu felis bibendum. Amet nulla facilisi morbi tempus iaculis urna id.\
    Adipiscing elit pellentesque habitant morbi tristique senectus et netus et. Feugiat nisl pretium fusce id velit ut tortor. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. In nulla posuere sollicitudin aliquam ultrices sagittis orci a. Consequat interdum varius sit amet mattis vulputate. Quis lectus nulla at volutpat diam ut. Habitant morbi tristique senectus et netus et malesuada. Ut faucibus pulvinar elementum integer enim neque volutpat ac. In mollis nunc sed id semper risus. Quis ipsum suspendisse ultrices gravida dictum fusce. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Proin sed libero enim sed. Augue interdum velit euismod in pellentesque massa. Turpis massa tincidunt dui ut ornare lectus sit.',
    createdAt: new Date(Math.floor(Math.random() * Date.now())).toLocaleDateString(),
    imageUrl: 'https://picsum.photos/seed/fourth/800/450'
  }
]

