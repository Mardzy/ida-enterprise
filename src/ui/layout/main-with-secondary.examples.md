```js
const main = () => (
  <section>
    <h1>Main</h1>
    <p>Taciti in suspendisse lacus sed, nunc diam ut et sit, senectus libero, pede vel nunc repellat urna aliquet. Sem cras ligula at, nunc a aliquam, ac amet nullam vulputate tellus in quis. Libero mauris pellentesque quisque eu, inceptos odio rhoncus diam eget rhoncus, risus pede non ut ligula risus dolor. Id erat, ultricies vivamus, sit nec cras, suspendisse auctor turpis diam. Fames volutpat erat neque, neque tellus pede. Dignissimos maecenas tincidunt in arcu. Lorem ipsum dolor sit amet, luctus dolor eget, libero sociis, orci sit laoreet nec. Taciti in suspendisse lacus sed.</p>
  </section>
);

const secondary = () => (
  <section>
    <h2>Secondary</h2>
    <p>Lorem ipsum dolor sit amet, luctus dolor eget, libero sociis, orci sit laoreet nec. Taciti in suspendisse lacus sed, nunc diam ut et sit, senectus libero, pede vel nunc repellat urna aliquet. Sem cras ligula at, nunc a aliquam, ac amet nullam vulputate tellus in quis. Libero mauris pellentesque quisque eu, inceptos odio rhoncus diam eget rhoncus, risus pede non ut ligula risus dolor. Id erat, ultricies vivamus, sit nec cras, suspendisse auctor turpis diam. Fames volutpat erat neque, neque tellus pede. Dignissimos maecenas tincidunt in arcu.</p>
  </section>
);

<MainWithSecondary main={main} secondary={secondary}/>
```