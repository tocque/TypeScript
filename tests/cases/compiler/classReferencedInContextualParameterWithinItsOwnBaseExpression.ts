// @strict: true
// @declaration: true
// @emitDeclarationOnly: true

interface Pretty<To> {
  (a: To): string;
}

interface Schema<A> {
  readonly pretty?: Pretty<A>;
}

interface Class<A> {
  new (): A;
}

declare const Class: <Self>(
  identifier: string,
) => <Fields>(
  fields: Fields,
  annotations?: Schema<Self>,
) => Class<OutputFrom<Fields>>;

type Type<TOutput> = {
  _TOutput: TOutput;
};

type OutputFrom<TFields> = {
  [K in keyof TFields]: "_TOutput" extends keyof TFields[K]
    ? TFields[K]["_TOutput"]
    : never;
};

declare function string(): Type<string>;

export class A extends Class<A>("A")(
  { a: string },
  {
    pretty: (a) => JSON.stringify(a),
  },
) {}
