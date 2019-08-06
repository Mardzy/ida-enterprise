```js
const sidebar = () => (
  <section>
    <h1>Sidebar</h1>
    <p>Lorem ipsum dolor sit amet, luctus dolor eget, libero sociis, orci sit laoreet nec. Taciti in suspendisse lacus sed.</p>
  </section>
);

const content = () => (
  <section>
    <h1>Content</h1>
    <p>Lorem ipsum dolor sit amet, luctus dolor eget, libero sociis, orci sit laoreet nec. Taciti in suspendisse lacus sed, nunc diam ut et sit, senectus libero, pede vel nunc repellat urna aliquet. Sem cras ligula at, nunc a aliquam, ac amet nullam vulputate tellus in quis. Libero mauris pellentesque quisque eu, inceptos odio rhoncus diam eget rhoncus, risus pede non ut ligula risus dolor. Id erat, ultricies vivamus, sit nec cras, suspendisse auctor turpis diam. Fames volutpat erat neque, neque tellus pede. Dignissimos maecenas tincidunt in arcu.</p>
  </section>
);

<ContentWithSidebar sidebar={sidebar} content={content}/>
```