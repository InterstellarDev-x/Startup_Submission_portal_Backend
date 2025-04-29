
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model admin
 * 
 */
export type admin = $Result.DefaultSelection<Prisma.$adminPayload>
/**
 * Model forms
 * 
 */
export type forms = $Result.DefaultSelection<Prisma.$formsPayload>
/**
 * Model teammember
 * 
 */
export type teammember = $Result.DefaultSelection<Prisma.$teammemberPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.adminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.forms`: Exposes CRUD operations for the **forms** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Forms
    * const forms = await prisma.forms.findMany()
    * ```
    */
  get forms(): Prisma.formsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teammember`: Exposes CRUD operations for the **teammember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teammembers
    * const teammembers = await prisma.teammember.findMany()
    * ```
    */
  get teammember(): Prisma.teammemberDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    admin: 'admin',
    forms: 'forms',
    teammember: 'teammember'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "admin" | "forms" | "teammember"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      admin: {
        payload: Prisma.$adminPayload<ExtArgs>
        fields: Prisma.adminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.adminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.adminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findFirst: {
            args: Prisma.adminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.adminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findMany: {
            args: Prisma.adminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>[]
          }
          create: {
            args: Prisma.adminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          createMany: {
            args: Prisma.adminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.adminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>[]
          }
          delete: {
            args: Prisma.adminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          update: {
            args: Prisma.adminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          deleteMany: {
            args: Prisma.adminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.adminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.adminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>[]
          }
          upsert: {
            args: Prisma.adminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.adminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.adminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      forms: {
        payload: Prisma.$formsPayload<ExtArgs>
        fields: Prisma.formsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.formsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.formsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formsPayload>
          }
          findFirst: {
            args: Prisma.formsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.formsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formsPayload>
          }
          findMany: {
            args: Prisma.formsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formsPayload>[]
          }
          create: {
            args: Prisma.formsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formsPayload>
          }
          createMany: {
            args: Prisma.formsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.formsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formsPayload>[]
          }
          delete: {
            args: Prisma.formsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formsPayload>
          }
          update: {
            args: Prisma.formsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formsPayload>
          }
          deleteMany: {
            args: Prisma.formsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.formsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.formsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formsPayload>[]
          }
          upsert: {
            args: Prisma.formsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formsPayload>
          }
          aggregate: {
            args: Prisma.FormsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateForms>
          }
          groupBy: {
            args: Prisma.formsGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormsGroupByOutputType>[]
          }
          count: {
            args: Prisma.formsCountArgs<ExtArgs>
            result: $Utils.Optional<FormsCountAggregateOutputType> | number
          }
        }
      }
      teammember: {
        payload: Prisma.$teammemberPayload<ExtArgs>
        fields: Prisma.teammemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.teammemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teammemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.teammemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teammemberPayload>
          }
          findFirst: {
            args: Prisma.teammemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teammemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.teammemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teammemberPayload>
          }
          findMany: {
            args: Prisma.teammemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teammemberPayload>[]
          }
          create: {
            args: Prisma.teammemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teammemberPayload>
          }
          createMany: {
            args: Prisma.teammemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.teammemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teammemberPayload>[]
          }
          delete: {
            args: Prisma.teammemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teammemberPayload>
          }
          update: {
            args: Prisma.teammemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teammemberPayload>
          }
          deleteMany: {
            args: Prisma.teammemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.teammemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.teammemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teammemberPayload>[]
          }
          upsert: {
            args: Prisma.teammemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teammemberPayload>
          }
          aggregate: {
            args: Prisma.TeammemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeammember>
          }
          groupBy: {
            args: Prisma.teammemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeammemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.teammemberCountArgs<ExtArgs>
            result: $Utils.Optional<TeammemberCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    admin?: adminOmit
    forms?: formsOmit
    teammember?: teammemberOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type FormsCountOutputType
   */

  export type FormsCountOutputType = {
    teamMembers: number
  }

  export type FormsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teamMembers?: boolean | FormsCountOutputTypeCountTeamMembersArgs
  }

  // Custom InputTypes
  /**
   * FormsCountOutputType without action
   */
  export type FormsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormsCountOutputType
     */
    select?: FormsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FormsCountOutputType without action
   */
  export type FormsCountOutputTypeCountTeamMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teammemberWhereInput
  }


  /**
   * Models
   */

  /**
   * Model admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    email: number
    password: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin to aggregate.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type adminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adminWhereInput
    orderBy?: adminOrderByWithAggregationInput | adminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: adminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    email: string
    password: string
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends adminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type adminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["admin"]>

  export type adminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["admin"]>

  export type adminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["admin"]>

  export type adminSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
  }

  export type adminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password", ExtArgs["result"]["admin"]>

  export type $adminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type adminGetPayload<S extends boolean | null | undefined | adminDefaultArgs> = $Result.GetResult<Prisma.$adminPayload, S>

  type adminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<adminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface adminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['admin'], meta: { name: 'admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {adminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends adminFindUniqueArgs>(args: SelectSubset<T, adminFindUniqueArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {adminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends adminFindUniqueOrThrowArgs>(args: SelectSubset<T, adminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends adminFindFirstArgs>(args?: SelectSubset<T, adminFindFirstArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends adminFindFirstOrThrowArgs>(args?: SelectSubset<T, adminFindFirstOrThrowArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends adminFindManyArgs>(args?: SelectSubset<T, adminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {adminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends adminCreateArgs>(args: SelectSubset<T, adminCreateArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {adminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends adminCreateManyArgs>(args?: SelectSubset<T, adminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {adminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends adminCreateManyAndReturnArgs>(args?: SelectSubset<T, adminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {adminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends adminDeleteArgs>(args: SelectSubset<T, adminDeleteArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {adminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends adminUpdateArgs>(args: SelectSubset<T, adminUpdateArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {adminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends adminDeleteManyArgs>(args?: SelectSubset<T, adminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends adminUpdateManyArgs>(args: SelectSubset<T, adminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {adminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends adminUpdateManyAndReturnArgs>(args: SelectSubset<T, adminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {adminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends adminUpsertArgs>(args: SelectSubset<T, adminUpsertArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends adminCountArgs>(
      args?: Subset<T, adminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends adminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: adminGroupByArgs['orderBy'] }
        : { orderBy?: adminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, adminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the admin model
   */
  readonly fields: adminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__adminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the admin model
   */
  interface adminFieldRefs {
    readonly id: FieldRef<"admin", 'Int'>
    readonly email: FieldRef<"admin", 'String'>
    readonly password: FieldRef<"admin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * admin findUnique
   */
  export type adminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findUniqueOrThrow
   */
  export type adminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findFirst
   */
  export type adminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findFirstOrThrow
   */
  export type adminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findMany
   */
  export type adminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin create
   */
  export type adminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data needed to create a admin.
     */
    data: XOR<adminCreateInput, adminUncheckedCreateInput>
  }

  /**
   * admin createMany
   */
  export type adminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many admins.
     */
    data: adminCreateManyInput | adminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admin createManyAndReturn
   */
  export type adminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data used to create many admins.
     */
    data: adminCreateManyInput | adminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admin update
   */
  export type adminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data needed to update a admin.
     */
    data: XOR<adminUpdateInput, adminUncheckedUpdateInput>
    /**
     * Choose, which admin to update.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin updateMany
   */
  export type adminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update admins.
     */
    data: XOR<adminUpdateManyMutationInput, adminUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to update.
     */
    limit?: number
  }

  /**
   * admin updateManyAndReturn
   */
  export type adminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data used to update admins.
     */
    data: XOR<adminUpdateManyMutationInput, adminUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to update.
     */
    limit?: number
  }

  /**
   * admin upsert
   */
  export type adminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The filter to search for the admin to update in case it exists.
     */
    where: adminWhereUniqueInput
    /**
     * In case the admin found by the `where` argument doesn't exist, create a new admin with this data.
     */
    create: XOR<adminCreateInput, adminUncheckedCreateInput>
    /**
     * In case the admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<adminUpdateInput, adminUncheckedUpdateInput>
  }

  /**
   * admin delete
   */
  export type adminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter which admin to delete.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin deleteMany
   */
  export type adminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admins to delete
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to delete.
     */
    limit?: number
  }

  /**
   * admin without action
   */
  export type adminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
  }


  /**
   * Model forms
   */

  export type AggregateForms = {
    _count: FormsCountAggregateOutputType | null
    _avg: FormsAvgAggregateOutputType | null
    _sum: FormsSumAggregateOutputType | null
    _min: FormsMinAggregateOutputType | null
    _max: FormsMaxAggregateOutputType | null
  }

  export type FormsAvgAggregateOutputType = {
    Teamid: number | null
  }

  export type FormsSumAggregateOutputType = {
    Teamid: number | null
  }

  export type FormsMinAggregateOutputType = {
    Teamid: number | null
    name: string | null
    contactEmail: string | null
    description: string | null
    SubmittedAt: Date | null
  }

  export type FormsMaxAggregateOutputType = {
    Teamid: number | null
    name: string | null
    contactEmail: string | null
    description: string | null
    SubmittedAt: Date | null
  }

  export type FormsCountAggregateOutputType = {
    Teamid: number
    name: number
    contactEmail: number
    description: number
    SubmittedAt: number
    _all: number
  }


  export type FormsAvgAggregateInputType = {
    Teamid?: true
  }

  export type FormsSumAggregateInputType = {
    Teamid?: true
  }

  export type FormsMinAggregateInputType = {
    Teamid?: true
    name?: true
    contactEmail?: true
    description?: true
    SubmittedAt?: true
  }

  export type FormsMaxAggregateInputType = {
    Teamid?: true
    name?: true
    contactEmail?: true
    description?: true
    SubmittedAt?: true
  }

  export type FormsCountAggregateInputType = {
    Teamid?: true
    name?: true
    contactEmail?: true
    description?: true
    SubmittedAt?: true
    _all?: true
  }

  export type FormsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which forms to aggregate.
     */
    where?: formsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of forms to fetch.
     */
    orderBy?: formsOrderByWithRelationInput | formsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: formsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` forms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned forms
    **/
    _count?: true | FormsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FormsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FormsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormsMaxAggregateInputType
  }

  export type GetFormsAggregateType<T extends FormsAggregateArgs> = {
        [P in keyof T & keyof AggregateForms]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateForms[P]>
      : GetScalarType<T[P], AggregateForms[P]>
  }




  export type formsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: formsWhereInput
    orderBy?: formsOrderByWithAggregationInput | formsOrderByWithAggregationInput[]
    by: FormsScalarFieldEnum[] | FormsScalarFieldEnum
    having?: formsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormsCountAggregateInputType | true
    _avg?: FormsAvgAggregateInputType
    _sum?: FormsSumAggregateInputType
    _min?: FormsMinAggregateInputType
    _max?: FormsMaxAggregateInputType
  }

  export type FormsGroupByOutputType = {
    Teamid: number
    name: string
    contactEmail: string
    description: string
    SubmittedAt: Date
    _count: FormsCountAggregateOutputType | null
    _avg: FormsAvgAggregateOutputType | null
    _sum: FormsSumAggregateOutputType | null
    _min: FormsMinAggregateOutputType | null
    _max: FormsMaxAggregateOutputType | null
  }

  type GetFormsGroupByPayload<T extends formsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormsGroupByOutputType[P]>
            : GetScalarType<T[P], FormsGroupByOutputType[P]>
        }
      >
    >


  export type formsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Teamid?: boolean
    name?: boolean
    contactEmail?: boolean
    description?: boolean
    SubmittedAt?: boolean
    teamMembers?: boolean | forms$teamMembersArgs<ExtArgs>
    _count?: boolean | FormsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forms"]>

  export type formsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Teamid?: boolean
    name?: boolean
    contactEmail?: boolean
    description?: boolean
    SubmittedAt?: boolean
  }, ExtArgs["result"]["forms"]>

  export type formsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Teamid?: boolean
    name?: boolean
    contactEmail?: boolean
    description?: boolean
    SubmittedAt?: boolean
  }, ExtArgs["result"]["forms"]>

  export type formsSelectScalar = {
    Teamid?: boolean
    name?: boolean
    contactEmail?: boolean
    description?: boolean
    SubmittedAt?: boolean
  }

  export type formsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Teamid" | "name" | "contactEmail" | "description" | "SubmittedAt", ExtArgs["result"]["forms"]>
  export type formsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teamMembers?: boolean | forms$teamMembersArgs<ExtArgs>
    _count?: boolean | FormsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type formsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type formsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $formsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "forms"
    objects: {
      teamMembers: Prisma.$teammemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Teamid: number
      name: string
      contactEmail: string
      description: string
      SubmittedAt: Date
    }, ExtArgs["result"]["forms"]>
    composites: {}
  }

  type formsGetPayload<S extends boolean | null | undefined | formsDefaultArgs> = $Result.GetResult<Prisma.$formsPayload, S>

  type formsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<formsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormsCountAggregateInputType | true
    }

  export interface formsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['forms'], meta: { name: 'forms' } }
    /**
     * Find zero or one Forms that matches the filter.
     * @param {formsFindUniqueArgs} args - Arguments to find a Forms
     * @example
     * // Get one Forms
     * const forms = await prisma.forms.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends formsFindUniqueArgs>(args: SelectSubset<T, formsFindUniqueArgs<ExtArgs>>): Prisma__formsClient<$Result.GetResult<Prisma.$formsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Forms that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {formsFindUniqueOrThrowArgs} args - Arguments to find a Forms
     * @example
     * // Get one Forms
     * const forms = await prisma.forms.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends formsFindUniqueOrThrowArgs>(args: SelectSubset<T, formsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__formsClient<$Result.GetResult<Prisma.$formsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Forms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formsFindFirstArgs} args - Arguments to find a Forms
     * @example
     * // Get one Forms
     * const forms = await prisma.forms.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends formsFindFirstArgs>(args?: SelectSubset<T, formsFindFirstArgs<ExtArgs>>): Prisma__formsClient<$Result.GetResult<Prisma.$formsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Forms that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formsFindFirstOrThrowArgs} args - Arguments to find a Forms
     * @example
     * // Get one Forms
     * const forms = await prisma.forms.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends formsFindFirstOrThrowArgs>(args?: SelectSubset<T, formsFindFirstOrThrowArgs<ExtArgs>>): Prisma__formsClient<$Result.GetResult<Prisma.$formsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Forms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Forms
     * const forms = await prisma.forms.findMany()
     * 
     * // Get first 10 Forms
     * const forms = await prisma.forms.findMany({ take: 10 })
     * 
     * // Only select the `Teamid`
     * const formsWithTeamidOnly = await prisma.forms.findMany({ select: { Teamid: true } })
     * 
     */
    findMany<T extends formsFindManyArgs>(args?: SelectSubset<T, formsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$formsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Forms.
     * @param {formsCreateArgs} args - Arguments to create a Forms.
     * @example
     * // Create one Forms
     * const Forms = await prisma.forms.create({
     *   data: {
     *     // ... data to create a Forms
     *   }
     * })
     * 
     */
    create<T extends formsCreateArgs>(args: SelectSubset<T, formsCreateArgs<ExtArgs>>): Prisma__formsClient<$Result.GetResult<Prisma.$formsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Forms.
     * @param {formsCreateManyArgs} args - Arguments to create many Forms.
     * @example
     * // Create many Forms
     * const forms = await prisma.forms.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends formsCreateManyArgs>(args?: SelectSubset<T, formsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Forms and returns the data saved in the database.
     * @param {formsCreateManyAndReturnArgs} args - Arguments to create many Forms.
     * @example
     * // Create many Forms
     * const forms = await prisma.forms.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Forms and only return the `Teamid`
     * const formsWithTeamidOnly = await prisma.forms.createManyAndReturn({
     *   select: { Teamid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends formsCreateManyAndReturnArgs>(args?: SelectSubset<T, formsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$formsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Forms.
     * @param {formsDeleteArgs} args - Arguments to delete one Forms.
     * @example
     * // Delete one Forms
     * const Forms = await prisma.forms.delete({
     *   where: {
     *     // ... filter to delete one Forms
     *   }
     * })
     * 
     */
    delete<T extends formsDeleteArgs>(args: SelectSubset<T, formsDeleteArgs<ExtArgs>>): Prisma__formsClient<$Result.GetResult<Prisma.$formsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Forms.
     * @param {formsUpdateArgs} args - Arguments to update one Forms.
     * @example
     * // Update one Forms
     * const forms = await prisma.forms.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends formsUpdateArgs>(args: SelectSubset<T, formsUpdateArgs<ExtArgs>>): Prisma__formsClient<$Result.GetResult<Prisma.$formsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Forms.
     * @param {formsDeleteManyArgs} args - Arguments to filter Forms to delete.
     * @example
     * // Delete a few Forms
     * const { count } = await prisma.forms.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends formsDeleteManyArgs>(args?: SelectSubset<T, formsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Forms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Forms
     * const forms = await prisma.forms.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends formsUpdateManyArgs>(args: SelectSubset<T, formsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Forms and returns the data updated in the database.
     * @param {formsUpdateManyAndReturnArgs} args - Arguments to update many Forms.
     * @example
     * // Update many Forms
     * const forms = await prisma.forms.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Forms and only return the `Teamid`
     * const formsWithTeamidOnly = await prisma.forms.updateManyAndReturn({
     *   select: { Teamid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends formsUpdateManyAndReturnArgs>(args: SelectSubset<T, formsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$formsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Forms.
     * @param {formsUpsertArgs} args - Arguments to update or create a Forms.
     * @example
     * // Update or create a Forms
     * const forms = await prisma.forms.upsert({
     *   create: {
     *     // ... data to create a Forms
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Forms we want to update
     *   }
     * })
     */
    upsert<T extends formsUpsertArgs>(args: SelectSubset<T, formsUpsertArgs<ExtArgs>>): Prisma__formsClient<$Result.GetResult<Prisma.$formsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Forms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formsCountArgs} args - Arguments to filter Forms to count.
     * @example
     * // Count the number of Forms
     * const count = await prisma.forms.count({
     *   where: {
     *     // ... the filter for the Forms we want to count
     *   }
     * })
    **/
    count<T extends formsCountArgs>(
      args?: Subset<T, formsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Forms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FormsAggregateArgs>(args: Subset<T, FormsAggregateArgs>): Prisma.PrismaPromise<GetFormsAggregateType<T>>

    /**
     * Group by Forms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends formsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: formsGroupByArgs['orderBy'] }
        : { orderBy?: formsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, formsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the forms model
   */
  readonly fields: formsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for forms.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__formsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teamMembers<T extends forms$teamMembersArgs<ExtArgs> = {}>(args?: Subset<T, forms$teamMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teammemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the forms model
   */
  interface formsFieldRefs {
    readonly Teamid: FieldRef<"forms", 'Int'>
    readonly name: FieldRef<"forms", 'String'>
    readonly contactEmail: FieldRef<"forms", 'String'>
    readonly description: FieldRef<"forms", 'String'>
    readonly SubmittedAt: FieldRef<"forms", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * forms findUnique
   */
  export type formsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the forms
     */
    select?: formsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the forms
     */
    omit?: formsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formsInclude<ExtArgs> | null
    /**
     * Filter, which forms to fetch.
     */
    where: formsWhereUniqueInput
  }

  /**
   * forms findUniqueOrThrow
   */
  export type formsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the forms
     */
    select?: formsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the forms
     */
    omit?: formsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formsInclude<ExtArgs> | null
    /**
     * Filter, which forms to fetch.
     */
    where: formsWhereUniqueInput
  }

  /**
   * forms findFirst
   */
  export type formsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the forms
     */
    select?: formsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the forms
     */
    omit?: formsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formsInclude<ExtArgs> | null
    /**
     * Filter, which forms to fetch.
     */
    where?: formsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of forms to fetch.
     */
    orderBy?: formsOrderByWithRelationInput | formsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for forms.
     */
    cursor?: formsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` forms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of forms.
     */
    distinct?: FormsScalarFieldEnum | FormsScalarFieldEnum[]
  }

  /**
   * forms findFirstOrThrow
   */
  export type formsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the forms
     */
    select?: formsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the forms
     */
    omit?: formsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formsInclude<ExtArgs> | null
    /**
     * Filter, which forms to fetch.
     */
    where?: formsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of forms to fetch.
     */
    orderBy?: formsOrderByWithRelationInput | formsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for forms.
     */
    cursor?: formsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` forms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of forms.
     */
    distinct?: FormsScalarFieldEnum | FormsScalarFieldEnum[]
  }

  /**
   * forms findMany
   */
  export type formsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the forms
     */
    select?: formsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the forms
     */
    omit?: formsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formsInclude<ExtArgs> | null
    /**
     * Filter, which forms to fetch.
     */
    where?: formsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of forms to fetch.
     */
    orderBy?: formsOrderByWithRelationInput | formsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing forms.
     */
    cursor?: formsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` forms.
     */
    skip?: number
    distinct?: FormsScalarFieldEnum | FormsScalarFieldEnum[]
  }

  /**
   * forms create
   */
  export type formsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the forms
     */
    select?: formsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the forms
     */
    omit?: formsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formsInclude<ExtArgs> | null
    /**
     * The data needed to create a forms.
     */
    data: XOR<formsCreateInput, formsUncheckedCreateInput>
  }

  /**
   * forms createMany
   */
  export type formsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many forms.
     */
    data: formsCreateManyInput | formsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * forms createManyAndReturn
   */
  export type formsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the forms
     */
    select?: formsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the forms
     */
    omit?: formsOmit<ExtArgs> | null
    /**
     * The data used to create many forms.
     */
    data: formsCreateManyInput | formsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * forms update
   */
  export type formsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the forms
     */
    select?: formsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the forms
     */
    omit?: formsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formsInclude<ExtArgs> | null
    /**
     * The data needed to update a forms.
     */
    data: XOR<formsUpdateInput, formsUncheckedUpdateInput>
    /**
     * Choose, which forms to update.
     */
    where: formsWhereUniqueInput
  }

  /**
   * forms updateMany
   */
  export type formsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update forms.
     */
    data: XOR<formsUpdateManyMutationInput, formsUncheckedUpdateManyInput>
    /**
     * Filter which forms to update
     */
    where?: formsWhereInput
    /**
     * Limit how many forms to update.
     */
    limit?: number
  }

  /**
   * forms updateManyAndReturn
   */
  export type formsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the forms
     */
    select?: formsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the forms
     */
    omit?: formsOmit<ExtArgs> | null
    /**
     * The data used to update forms.
     */
    data: XOR<formsUpdateManyMutationInput, formsUncheckedUpdateManyInput>
    /**
     * Filter which forms to update
     */
    where?: formsWhereInput
    /**
     * Limit how many forms to update.
     */
    limit?: number
  }

  /**
   * forms upsert
   */
  export type formsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the forms
     */
    select?: formsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the forms
     */
    omit?: formsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formsInclude<ExtArgs> | null
    /**
     * The filter to search for the forms to update in case it exists.
     */
    where: formsWhereUniqueInput
    /**
     * In case the forms found by the `where` argument doesn't exist, create a new forms with this data.
     */
    create: XOR<formsCreateInput, formsUncheckedCreateInput>
    /**
     * In case the forms was found with the provided `where` argument, update it with this data.
     */
    update: XOR<formsUpdateInput, formsUncheckedUpdateInput>
  }

  /**
   * forms delete
   */
  export type formsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the forms
     */
    select?: formsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the forms
     */
    omit?: formsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formsInclude<ExtArgs> | null
    /**
     * Filter which forms to delete.
     */
    where: formsWhereUniqueInput
  }

  /**
   * forms deleteMany
   */
  export type formsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which forms to delete
     */
    where?: formsWhereInput
    /**
     * Limit how many forms to delete.
     */
    limit?: number
  }

  /**
   * forms.teamMembers
   */
  export type forms$teamMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teammember
     */
    select?: teammemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teammember
     */
    omit?: teammemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teammemberInclude<ExtArgs> | null
    where?: teammemberWhereInput
    orderBy?: teammemberOrderByWithRelationInput | teammemberOrderByWithRelationInput[]
    cursor?: teammemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeammemberScalarFieldEnum | TeammemberScalarFieldEnum[]
  }

  /**
   * forms without action
   */
  export type formsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the forms
     */
    select?: formsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the forms
     */
    omit?: formsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formsInclude<ExtArgs> | null
  }


  /**
   * Model teammember
   */

  export type AggregateTeammember = {
    _count: TeammemberCountAggregateOutputType | null
    _avg: TeammemberAvgAggregateOutputType | null
    _sum: TeammemberSumAggregateOutputType | null
    _min: TeammemberMinAggregateOutputType | null
    _max: TeammemberMaxAggregateOutputType | null
  }

  export type TeammemberAvgAggregateOutputType = {
    id: number | null
    Teamid: number | null
  }

  export type TeammemberSumAggregateOutputType = {
    id: number | null
    Teamid: number | null
  }

  export type TeammemberMinAggregateOutputType = {
    id: number | null
    name: string | null
    Teamid: number | null
  }

  export type TeammemberMaxAggregateOutputType = {
    id: number | null
    name: string | null
    Teamid: number | null
  }

  export type TeammemberCountAggregateOutputType = {
    id: number
    name: number
    Teamid: number
    _all: number
  }


  export type TeammemberAvgAggregateInputType = {
    id?: true
    Teamid?: true
  }

  export type TeammemberSumAggregateInputType = {
    id?: true
    Teamid?: true
  }

  export type TeammemberMinAggregateInputType = {
    id?: true
    name?: true
    Teamid?: true
  }

  export type TeammemberMaxAggregateInputType = {
    id?: true
    name?: true
    Teamid?: true
  }

  export type TeammemberCountAggregateInputType = {
    id?: true
    name?: true
    Teamid?: true
    _all?: true
  }

  export type TeammemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teammember to aggregate.
     */
    where?: teammemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teammembers to fetch.
     */
    orderBy?: teammemberOrderByWithRelationInput | teammemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: teammemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teammembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teammembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned teammembers
    **/
    _count?: true | TeammemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeammemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeammemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeammemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeammemberMaxAggregateInputType
  }

  export type GetTeammemberAggregateType<T extends TeammemberAggregateArgs> = {
        [P in keyof T & keyof AggregateTeammember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeammember[P]>
      : GetScalarType<T[P], AggregateTeammember[P]>
  }




  export type teammemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teammemberWhereInput
    orderBy?: teammemberOrderByWithAggregationInput | teammemberOrderByWithAggregationInput[]
    by: TeammemberScalarFieldEnum[] | TeammemberScalarFieldEnum
    having?: teammemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeammemberCountAggregateInputType | true
    _avg?: TeammemberAvgAggregateInputType
    _sum?: TeammemberSumAggregateInputType
    _min?: TeammemberMinAggregateInputType
    _max?: TeammemberMaxAggregateInputType
  }

  export type TeammemberGroupByOutputType = {
    id: number
    name: string
    Teamid: number
    _count: TeammemberCountAggregateOutputType | null
    _avg: TeammemberAvgAggregateOutputType | null
    _sum: TeammemberSumAggregateOutputType | null
    _min: TeammemberMinAggregateOutputType | null
    _max: TeammemberMaxAggregateOutputType | null
  }

  type GetTeammemberGroupByPayload<T extends teammemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeammemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeammemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeammemberGroupByOutputType[P]>
            : GetScalarType<T[P], TeammemberGroupByOutputType[P]>
        }
      >
    >


  export type teammemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    Teamid?: boolean
    team?: boolean | formsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teammember"]>

  export type teammemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    Teamid?: boolean
    team?: boolean | formsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teammember"]>

  export type teammemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    Teamid?: boolean
    team?: boolean | formsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teammember"]>

  export type teammemberSelectScalar = {
    id?: boolean
    name?: boolean
    Teamid?: boolean
  }

  export type teammemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "Teamid", ExtArgs["result"]["teammember"]>
  export type teammemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | formsDefaultArgs<ExtArgs>
  }
  export type teammemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | formsDefaultArgs<ExtArgs>
  }
  export type teammemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | formsDefaultArgs<ExtArgs>
  }

  export type $teammemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "teammember"
    objects: {
      team: Prisma.$formsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      Teamid: number
    }, ExtArgs["result"]["teammember"]>
    composites: {}
  }

  type teammemberGetPayload<S extends boolean | null | undefined | teammemberDefaultArgs> = $Result.GetResult<Prisma.$teammemberPayload, S>

  type teammemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<teammemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeammemberCountAggregateInputType | true
    }

  export interface teammemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['teammember'], meta: { name: 'teammember' } }
    /**
     * Find zero or one Teammember that matches the filter.
     * @param {teammemberFindUniqueArgs} args - Arguments to find a Teammember
     * @example
     * // Get one Teammember
     * const teammember = await prisma.teammember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends teammemberFindUniqueArgs>(args: SelectSubset<T, teammemberFindUniqueArgs<ExtArgs>>): Prisma__teammemberClient<$Result.GetResult<Prisma.$teammemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Teammember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {teammemberFindUniqueOrThrowArgs} args - Arguments to find a Teammember
     * @example
     * // Get one Teammember
     * const teammember = await prisma.teammember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends teammemberFindUniqueOrThrowArgs>(args: SelectSubset<T, teammemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__teammemberClient<$Result.GetResult<Prisma.$teammemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teammember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teammemberFindFirstArgs} args - Arguments to find a Teammember
     * @example
     * // Get one Teammember
     * const teammember = await prisma.teammember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends teammemberFindFirstArgs>(args?: SelectSubset<T, teammemberFindFirstArgs<ExtArgs>>): Prisma__teammemberClient<$Result.GetResult<Prisma.$teammemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teammember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teammemberFindFirstOrThrowArgs} args - Arguments to find a Teammember
     * @example
     * // Get one Teammember
     * const teammember = await prisma.teammember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends teammemberFindFirstOrThrowArgs>(args?: SelectSubset<T, teammemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__teammemberClient<$Result.GetResult<Prisma.$teammemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teammembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teammemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teammembers
     * const teammembers = await prisma.teammember.findMany()
     * 
     * // Get first 10 Teammembers
     * const teammembers = await prisma.teammember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teammemberWithIdOnly = await prisma.teammember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends teammemberFindManyArgs>(args?: SelectSubset<T, teammemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teammemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Teammember.
     * @param {teammemberCreateArgs} args - Arguments to create a Teammember.
     * @example
     * // Create one Teammember
     * const Teammember = await prisma.teammember.create({
     *   data: {
     *     // ... data to create a Teammember
     *   }
     * })
     * 
     */
    create<T extends teammemberCreateArgs>(args: SelectSubset<T, teammemberCreateArgs<ExtArgs>>): Prisma__teammemberClient<$Result.GetResult<Prisma.$teammemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teammembers.
     * @param {teammemberCreateManyArgs} args - Arguments to create many Teammembers.
     * @example
     * // Create many Teammembers
     * const teammember = await prisma.teammember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends teammemberCreateManyArgs>(args?: SelectSubset<T, teammemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teammembers and returns the data saved in the database.
     * @param {teammemberCreateManyAndReturnArgs} args - Arguments to create many Teammembers.
     * @example
     * // Create many Teammembers
     * const teammember = await prisma.teammember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teammembers and only return the `id`
     * const teammemberWithIdOnly = await prisma.teammember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends teammemberCreateManyAndReturnArgs>(args?: SelectSubset<T, teammemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teammemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Teammember.
     * @param {teammemberDeleteArgs} args - Arguments to delete one Teammember.
     * @example
     * // Delete one Teammember
     * const Teammember = await prisma.teammember.delete({
     *   where: {
     *     // ... filter to delete one Teammember
     *   }
     * })
     * 
     */
    delete<T extends teammemberDeleteArgs>(args: SelectSubset<T, teammemberDeleteArgs<ExtArgs>>): Prisma__teammemberClient<$Result.GetResult<Prisma.$teammemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Teammember.
     * @param {teammemberUpdateArgs} args - Arguments to update one Teammember.
     * @example
     * // Update one Teammember
     * const teammember = await prisma.teammember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends teammemberUpdateArgs>(args: SelectSubset<T, teammemberUpdateArgs<ExtArgs>>): Prisma__teammemberClient<$Result.GetResult<Prisma.$teammemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teammembers.
     * @param {teammemberDeleteManyArgs} args - Arguments to filter Teammembers to delete.
     * @example
     * // Delete a few Teammembers
     * const { count } = await prisma.teammember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends teammemberDeleteManyArgs>(args?: SelectSubset<T, teammemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teammembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teammemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teammembers
     * const teammember = await prisma.teammember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends teammemberUpdateManyArgs>(args: SelectSubset<T, teammemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teammembers and returns the data updated in the database.
     * @param {teammemberUpdateManyAndReturnArgs} args - Arguments to update many Teammembers.
     * @example
     * // Update many Teammembers
     * const teammember = await prisma.teammember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teammembers and only return the `id`
     * const teammemberWithIdOnly = await prisma.teammember.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends teammemberUpdateManyAndReturnArgs>(args: SelectSubset<T, teammemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teammemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Teammember.
     * @param {teammemberUpsertArgs} args - Arguments to update or create a Teammember.
     * @example
     * // Update or create a Teammember
     * const teammember = await prisma.teammember.upsert({
     *   create: {
     *     // ... data to create a Teammember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teammember we want to update
     *   }
     * })
     */
    upsert<T extends teammemberUpsertArgs>(args: SelectSubset<T, teammemberUpsertArgs<ExtArgs>>): Prisma__teammemberClient<$Result.GetResult<Prisma.$teammemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teammembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teammemberCountArgs} args - Arguments to filter Teammembers to count.
     * @example
     * // Count the number of Teammembers
     * const count = await prisma.teammember.count({
     *   where: {
     *     // ... the filter for the Teammembers we want to count
     *   }
     * })
    **/
    count<T extends teammemberCountArgs>(
      args?: Subset<T, teammemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeammemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teammember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeammemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeammemberAggregateArgs>(args: Subset<T, TeammemberAggregateArgs>): Prisma.PrismaPromise<GetTeammemberAggregateType<T>>

    /**
     * Group by Teammember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teammemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends teammemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: teammemberGroupByArgs['orderBy'] }
        : { orderBy?: teammemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, teammemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeammemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the teammember model
   */
  readonly fields: teammemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for teammember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__teammemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends formsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, formsDefaultArgs<ExtArgs>>): Prisma__formsClient<$Result.GetResult<Prisma.$formsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the teammember model
   */
  interface teammemberFieldRefs {
    readonly id: FieldRef<"teammember", 'Int'>
    readonly name: FieldRef<"teammember", 'String'>
    readonly Teamid: FieldRef<"teammember", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * teammember findUnique
   */
  export type teammemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teammember
     */
    select?: teammemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teammember
     */
    omit?: teammemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teammemberInclude<ExtArgs> | null
    /**
     * Filter, which teammember to fetch.
     */
    where: teammemberWhereUniqueInput
  }

  /**
   * teammember findUniqueOrThrow
   */
  export type teammemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teammember
     */
    select?: teammemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teammember
     */
    omit?: teammemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teammemberInclude<ExtArgs> | null
    /**
     * Filter, which teammember to fetch.
     */
    where: teammemberWhereUniqueInput
  }

  /**
   * teammember findFirst
   */
  export type teammemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teammember
     */
    select?: teammemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teammember
     */
    omit?: teammemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teammemberInclude<ExtArgs> | null
    /**
     * Filter, which teammember to fetch.
     */
    where?: teammemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teammembers to fetch.
     */
    orderBy?: teammemberOrderByWithRelationInput | teammemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for teammembers.
     */
    cursor?: teammemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teammembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teammembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of teammembers.
     */
    distinct?: TeammemberScalarFieldEnum | TeammemberScalarFieldEnum[]
  }

  /**
   * teammember findFirstOrThrow
   */
  export type teammemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teammember
     */
    select?: teammemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teammember
     */
    omit?: teammemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teammemberInclude<ExtArgs> | null
    /**
     * Filter, which teammember to fetch.
     */
    where?: teammemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teammembers to fetch.
     */
    orderBy?: teammemberOrderByWithRelationInput | teammemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for teammembers.
     */
    cursor?: teammemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teammembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teammembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of teammembers.
     */
    distinct?: TeammemberScalarFieldEnum | TeammemberScalarFieldEnum[]
  }

  /**
   * teammember findMany
   */
  export type teammemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teammember
     */
    select?: teammemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teammember
     */
    omit?: teammemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teammemberInclude<ExtArgs> | null
    /**
     * Filter, which teammembers to fetch.
     */
    where?: teammemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teammembers to fetch.
     */
    orderBy?: teammemberOrderByWithRelationInput | teammemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing teammembers.
     */
    cursor?: teammemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teammembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teammembers.
     */
    skip?: number
    distinct?: TeammemberScalarFieldEnum | TeammemberScalarFieldEnum[]
  }

  /**
   * teammember create
   */
  export type teammemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teammember
     */
    select?: teammemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teammember
     */
    omit?: teammemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teammemberInclude<ExtArgs> | null
    /**
     * The data needed to create a teammember.
     */
    data: XOR<teammemberCreateInput, teammemberUncheckedCreateInput>
  }

  /**
   * teammember createMany
   */
  export type teammemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many teammembers.
     */
    data: teammemberCreateManyInput | teammemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * teammember createManyAndReturn
   */
  export type teammemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teammember
     */
    select?: teammemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the teammember
     */
    omit?: teammemberOmit<ExtArgs> | null
    /**
     * The data used to create many teammembers.
     */
    data: teammemberCreateManyInput | teammemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teammemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * teammember update
   */
  export type teammemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teammember
     */
    select?: teammemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teammember
     */
    omit?: teammemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teammemberInclude<ExtArgs> | null
    /**
     * The data needed to update a teammember.
     */
    data: XOR<teammemberUpdateInput, teammemberUncheckedUpdateInput>
    /**
     * Choose, which teammember to update.
     */
    where: teammemberWhereUniqueInput
  }

  /**
   * teammember updateMany
   */
  export type teammemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update teammembers.
     */
    data: XOR<teammemberUpdateManyMutationInput, teammemberUncheckedUpdateManyInput>
    /**
     * Filter which teammembers to update
     */
    where?: teammemberWhereInput
    /**
     * Limit how many teammembers to update.
     */
    limit?: number
  }

  /**
   * teammember updateManyAndReturn
   */
  export type teammemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teammember
     */
    select?: teammemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the teammember
     */
    omit?: teammemberOmit<ExtArgs> | null
    /**
     * The data used to update teammembers.
     */
    data: XOR<teammemberUpdateManyMutationInput, teammemberUncheckedUpdateManyInput>
    /**
     * Filter which teammembers to update
     */
    where?: teammemberWhereInput
    /**
     * Limit how many teammembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teammemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * teammember upsert
   */
  export type teammemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teammember
     */
    select?: teammemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teammember
     */
    omit?: teammemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teammemberInclude<ExtArgs> | null
    /**
     * The filter to search for the teammember to update in case it exists.
     */
    where: teammemberWhereUniqueInput
    /**
     * In case the teammember found by the `where` argument doesn't exist, create a new teammember with this data.
     */
    create: XOR<teammemberCreateInput, teammemberUncheckedCreateInput>
    /**
     * In case the teammember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<teammemberUpdateInput, teammemberUncheckedUpdateInput>
  }

  /**
   * teammember delete
   */
  export type teammemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teammember
     */
    select?: teammemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teammember
     */
    omit?: teammemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teammemberInclude<ExtArgs> | null
    /**
     * Filter which teammember to delete.
     */
    where: teammemberWhereUniqueInput
  }

  /**
   * teammember deleteMany
   */
  export type teammemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teammembers to delete
     */
    where?: teammemberWhereInput
    /**
     * Limit how many teammembers to delete.
     */
    limit?: number
  }

  /**
   * teammember without action
   */
  export type teammemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teammember
     */
    select?: teammemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teammember
     */
    omit?: teammemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teammemberInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdminScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const FormsScalarFieldEnum: {
    Teamid: 'Teamid',
    name: 'name',
    contactEmail: 'contactEmail',
    description: 'description',
    SubmittedAt: 'SubmittedAt'
  };

  export type FormsScalarFieldEnum = (typeof FormsScalarFieldEnum)[keyof typeof FormsScalarFieldEnum]


  export const TeammemberScalarFieldEnum: {
    id: 'id',
    name: 'name',
    Teamid: 'Teamid'
  };

  export type TeammemberScalarFieldEnum = (typeof TeammemberScalarFieldEnum)[keyof typeof TeammemberScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type adminWhereInput = {
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    id?: IntFilter<"admin"> | number
    email?: StringFilter<"admin"> | string
    password?: StringFilter<"admin"> | string
  }

  export type adminOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type adminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    password?: StringFilter<"admin"> | string
  }, "id" | "email">

  export type adminOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: adminCountOrderByAggregateInput
    _avg?: adminAvgOrderByAggregateInput
    _max?: adminMaxOrderByAggregateInput
    _min?: adminMinOrderByAggregateInput
    _sum?: adminSumOrderByAggregateInput
  }

  export type adminScalarWhereWithAggregatesInput = {
    AND?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    OR?: adminScalarWhereWithAggregatesInput[]
    NOT?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"admin"> | number
    email?: StringWithAggregatesFilter<"admin"> | string
    password?: StringWithAggregatesFilter<"admin"> | string
  }

  export type formsWhereInput = {
    AND?: formsWhereInput | formsWhereInput[]
    OR?: formsWhereInput[]
    NOT?: formsWhereInput | formsWhereInput[]
    Teamid?: IntFilter<"forms"> | number
    name?: StringFilter<"forms"> | string
    contactEmail?: StringFilter<"forms"> | string
    description?: StringFilter<"forms"> | string
    SubmittedAt?: DateTimeFilter<"forms"> | Date | string
    teamMembers?: TeammemberListRelationFilter
  }

  export type formsOrderByWithRelationInput = {
    Teamid?: SortOrder
    name?: SortOrder
    contactEmail?: SortOrder
    description?: SortOrder
    SubmittedAt?: SortOrder
    teamMembers?: teammemberOrderByRelationAggregateInput
  }

  export type formsWhereUniqueInput = Prisma.AtLeast<{
    Teamid?: number
    contactEmail?: string
    AND?: formsWhereInput | formsWhereInput[]
    OR?: formsWhereInput[]
    NOT?: formsWhereInput | formsWhereInput[]
    name?: StringFilter<"forms"> | string
    description?: StringFilter<"forms"> | string
    SubmittedAt?: DateTimeFilter<"forms"> | Date | string
    teamMembers?: TeammemberListRelationFilter
  }, "Teamid" | "contactEmail">

  export type formsOrderByWithAggregationInput = {
    Teamid?: SortOrder
    name?: SortOrder
    contactEmail?: SortOrder
    description?: SortOrder
    SubmittedAt?: SortOrder
    _count?: formsCountOrderByAggregateInput
    _avg?: formsAvgOrderByAggregateInput
    _max?: formsMaxOrderByAggregateInput
    _min?: formsMinOrderByAggregateInput
    _sum?: formsSumOrderByAggregateInput
  }

  export type formsScalarWhereWithAggregatesInput = {
    AND?: formsScalarWhereWithAggregatesInput | formsScalarWhereWithAggregatesInput[]
    OR?: formsScalarWhereWithAggregatesInput[]
    NOT?: formsScalarWhereWithAggregatesInput | formsScalarWhereWithAggregatesInput[]
    Teamid?: IntWithAggregatesFilter<"forms"> | number
    name?: StringWithAggregatesFilter<"forms"> | string
    contactEmail?: StringWithAggregatesFilter<"forms"> | string
    description?: StringWithAggregatesFilter<"forms"> | string
    SubmittedAt?: DateTimeWithAggregatesFilter<"forms"> | Date | string
  }

  export type teammemberWhereInput = {
    AND?: teammemberWhereInput | teammemberWhereInput[]
    OR?: teammemberWhereInput[]
    NOT?: teammemberWhereInput | teammemberWhereInput[]
    id?: IntFilter<"teammember"> | number
    name?: StringFilter<"teammember"> | string
    Teamid?: IntFilter<"teammember"> | number
    team?: XOR<FormsScalarRelationFilter, formsWhereInput>
  }

  export type teammemberOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    Teamid?: SortOrder
    team?: formsOrderByWithRelationInput
  }

  export type teammemberWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: teammemberWhereInput | teammemberWhereInput[]
    OR?: teammemberWhereInput[]
    NOT?: teammemberWhereInput | teammemberWhereInput[]
    name?: StringFilter<"teammember"> | string
    Teamid?: IntFilter<"teammember"> | number
    team?: XOR<FormsScalarRelationFilter, formsWhereInput>
  }, "id">

  export type teammemberOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    Teamid?: SortOrder
    _count?: teammemberCountOrderByAggregateInput
    _avg?: teammemberAvgOrderByAggregateInput
    _max?: teammemberMaxOrderByAggregateInput
    _min?: teammemberMinOrderByAggregateInput
    _sum?: teammemberSumOrderByAggregateInput
  }

  export type teammemberScalarWhereWithAggregatesInput = {
    AND?: teammemberScalarWhereWithAggregatesInput | teammemberScalarWhereWithAggregatesInput[]
    OR?: teammemberScalarWhereWithAggregatesInput[]
    NOT?: teammemberScalarWhereWithAggregatesInput | teammemberScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"teammember"> | number
    name?: StringWithAggregatesFilter<"teammember"> | string
    Teamid?: IntWithAggregatesFilter<"teammember"> | number
  }

  export type adminCreateInput = {
    email: string
    password: string
  }

  export type adminUncheckedCreateInput = {
    id?: number
    email: string
    password: string
  }

  export type adminUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type adminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type adminCreateManyInput = {
    id?: number
    email: string
    password: string
  }

  export type adminUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type adminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type formsCreateInput = {
    name: string
    contactEmail: string
    description: string
    SubmittedAt?: Date | string
    teamMembers?: teammemberCreateNestedManyWithoutTeamInput
  }

  export type formsUncheckedCreateInput = {
    Teamid?: number
    name: string
    contactEmail: string
    description: string
    SubmittedAt?: Date | string
    teamMembers?: teammemberUncheckedCreateNestedManyWithoutTeamInput
  }

  export type formsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    SubmittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamMembers?: teammemberUpdateManyWithoutTeamNestedInput
  }

  export type formsUncheckedUpdateInput = {
    Teamid?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    SubmittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamMembers?: teammemberUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type formsCreateManyInput = {
    Teamid?: number
    name: string
    contactEmail: string
    description: string
    SubmittedAt?: Date | string
  }

  export type formsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    SubmittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type formsUncheckedUpdateManyInput = {
    Teamid?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    SubmittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type teammemberCreateInput = {
    name: string
    team: formsCreateNestedOneWithoutTeamMembersInput
  }

  export type teammemberUncheckedCreateInput = {
    id?: number
    name: string
    Teamid: number
  }

  export type teammemberUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    team?: formsUpdateOneRequiredWithoutTeamMembersNestedInput
  }

  export type teammemberUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Teamid?: IntFieldUpdateOperationsInput | number
  }

  export type teammemberCreateManyInput = {
    id?: number
    name: string
    Teamid: number
  }

  export type teammemberUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type teammemberUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Teamid?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type adminCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type adminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type adminMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type adminMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type adminSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TeammemberListRelationFilter = {
    every?: teammemberWhereInput
    some?: teammemberWhereInput
    none?: teammemberWhereInput
  }

  export type teammemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type formsCountOrderByAggregateInput = {
    Teamid?: SortOrder
    name?: SortOrder
    contactEmail?: SortOrder
    description?: SortOrder
    SubmittedAt?: SortOrder
  }

  export type formsAvgOrderByAggregateInput = {
    Teamid?: SortOrder
  }

  export type formsMaxOrderByAggregateInput = {
    Teamid?: SortOrder
    name?: SortOrder
    contactEmail?: SortOrder
    description?: SortOrder
    SubmittedAt?: SortOrder
  }

  export type formsMinOrderByAggregateInput = {
    Teamid?: SortOrder
    name?: SortOrder
    contactEmail?: SortOrder
    description?: SortOrder
    SubmittedAt?: SortOrder
  }

  export type formsSumOrderByAggregateInput = {
    Teamid?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FormsScalarRelationFilter = {
    is?: formsWhereInput
    isNot?: formsWhereInput
  }

  export type teammemberCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    Teamid?: SortOrder
  }

  export type teammemberAvgOrderByAggregateInput = {
    id?: SortOrder
    Teamid?: SortOrder
  }

  export type teammemberMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    Teamid?: SortOrder
  }

  export type teammemberMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    Teamid?: SortOrder
  }

  export type teammemberSumOrderByAggregateInput = {
    id?: SortOrder
    Teamid?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type teammemberCreateNestedManyWithoutTeamInput = {
    create?: XOR<teammemberCreateWithoutTeamInput, teammemberUncheckedCreateWithoutTeamInput> | teammemberCreateWithoutTeamInput[] | teammemberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: teammemberCreateOrConnectWithoutTeamInput | teammemberCreateOrConnectWithoutTeamInput[]
    createMany?: teammemberCreateManyTeamInputEnvelope
    connect?: teammemberWhereUniqueInput | teammemberWhereUniqueInput[]
  }

  export type teammemberUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<teammemberCreateWithoutTeamInput, teammemberUncheckedCreateWithoutTeamInput> | teammemberCreateWithoutTeamInput[] | teammemberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: teammemberCreateOrConnectWithoutTeamInput | teammemberCreateOrConnectWithoutTeamInput[]
    createMany?: teammemberCreateManyTeamInputEnvelope
    connect?: teammemberWhereUniqueInput | teammemberWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type teammemberUpdateManyWithoutTeamNestedInput = {
    create?: XOR<teammemberCreateWithoutTeamInput, teammemberUncheckedCreateWithoutTeamInput> | teammemberCreateWithoutTeamInput[] | teammemberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: teammemberCreateOrConnectWithoutTeamInput | teammemberCreateOrConnectWithoutTeamInput[]
    upsert?: teammemberUpsertWithWhereUniqueWithoutTeamInput | teammemberUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: teammemberCreateManyTeamInputEnvelope
    set?: teammemberWhereUniqueInput | teammemberWhereUniqueInput[]
    disconnect?: teammemberWhereUniqueInput | teammemberWhereUniqueInput[]
    delete?: teammemberWhereUniqueInput | teammemberWhereUniqueInput[]
    connect?: teammemberWhereUniqueInput | teammemberWhereUniqueInput[]
    update?: teammemberUpdateWithWhereUniqueWithoutTeamInput | teammemberUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: teammemberUpdateManyWithWhereWithoutTeamInput | teammemberUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: teammemberScalarWhereInput | teammemberScalarWhereInput[]
  }

  export type teammemberUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<teammemberCreateWithoutTeamInput, teammemberUncheckedCreateWithoutTeamInput> | teammemberCreateWithoutTeamInput[] | teammemberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: teammemberCreateOrConnectWithoutTeamInput | teammemberCreateOrConnectWithoutTeamInput[]
    upsert?: teammemberUpsertWithWhereUniqueWithoutTeamInput | teammemberUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: teammemberCreateManyTeamInputEnvelope
    set?: teammemberWhereUniqueInput | teammemberWhereUniqueInput[]
    disconnect?: teammemberWhereUniqueInput | teammemberWhereUniqueInput[]
    delete?: teammemberWhereUniqueInput | teammemberWhereUniqueInput[]
    connect?: teammemberWhereUniqueInput | teammemberWhereUniqueInput[]
    update?: teammemberUpdateWithWhereUniqueWithoutTeamInput | teammemberUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: teammemberUpdateManyWithWhereWithoutTeamInput | teammemberUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: teammemberScalarWhereInput | teammemberScalarWhereInput[]
  }

  export type formsCreateNestedOneWithoutTeamMembersInput = {
    create?: XOR<formsCreateWithoutTeamMembersInput, formsUncheckedCreateWithoutTeamMembersInput>
    connectOrCreate?: formsCreateOrConnectWithoutTeamMembersInput
    connect?: formsWhereUniqueInput
  }

  export type formsUpdateOneRequiredWithoutTeamMembersNestedInput = {
    create?: XOR<formsCreateWithoutTeamMembersInput, formsUncheckedCreateWithoutTeamMembersInput>
    connectOrCreate?: formsCreateOrConnectWithoutTeamMembersInput
    upsert?: formsUpsertWithoutTeamMembersInput
    connect?: formsWhereUniqueInput
    update?: XOR<XOR<formsUpdateToOneWithWhereWithoutTeamMembersInput, formsUpdateWithoutTeamMembersInput>, formsUncheckedUpdateWithoutTeamMembersInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type teammemberCreateWithoutTeamInput = {
    name: string
  }

  export type teammemberUncheckedCreateWithoutTeamInput = {
    id?: number
    name: string
  }

  export type teammemberCreateOrConnectWithoutTeamInput = {
    where: teammemberWhereUniqueInput
    create: XOR<teammemberCreateWithoutTeamInput, teammemberUncheckedCreateWithoutTeamInput>
  }

  export type teammemberCreateManyTeamInputEnvelope = {
    data: teammemberCreateManyTeamInput | teammemberCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type teammemberUpsertWithWhereUniqueWithoutTeamInput = {
    where: teammemberWhereUniqueInput
    update: XOR<teammemberUpdateWithoutTeamInput, teammemberUncheckedUpdateWithoutTeamInput>
    create: XOR<teammemberCreateWithoutTeamInput, teammemberUncheckedCreateWithoutTeamInput>
  }

  export type teammemberUpdateWithWhereUniqueWithoutTeamInput = {
    where: teammemberWhereUniqueInput
    data: XOR<teammemberUpdateWithoutTeamInput, teammemberUncheckedUpdateWithoutTeamInput>
  }

  export type teammemberUpdateManyWithWhereWithoutTeamInput = {
    where: teammemberScalarWhereInput
    data: XOR<teammemberUpdateManyMutationInput, teammemberUncheckedUpdateManyWithoutTeamInput>
  }

  export type teammemberScalarWhereInput = {
    AND?: teammemberScalarWhereInput | teammemberScalarWhereInput[]
    OR?: teammemberScalarWhereInput[]
    NOT?: teammemberScalarWhereInput | teammemberScalarWhereInput[]
    id?: IntFilter<"teammember"> | number
    name?: StringFilter<"teammember"> | string
    Teamid?: IntFilter<"teammember"> | number
  }

  export type formsCreateWithoutTeamMembersInput = {
    name: string
    contactEmail: string
    description: string
    SubmittedAt?: Date | string
  }

  export type formsUncheckedCreateWithoutTeamMembersInput = {
    Teamid?: number
    name: string
    contactEmail: string
    description: string
    SubmittedAt?: Date | string
  }

  export type formsCreateOrConnectWithoutTeamMembersInput = {
    where: formsWhereUniqueInput
    create: XOR<formsCreateWithoutTeamMembersInput, formsUncheckedCreateWithoutTeamMembersInput>
  }

  export type formsUpsertWithoutTeamMembersInput = {
    update: XOR<formsUpdateWithoutTeamMembersInput, formsUncheckedUpdateWithoutTeamMembersInput>
    create: XOR<formsCreateWithoutTeamMembersInput, formsUncheckedCreateWithoutTeamMembersInput>
    where?: formsWhereInput
  }

  export type formsUpdateToOneWithWhereWithoutTeamMembersInput = {
    where?: formsWhereInput
    data: XOR<formsUpdateWithoutTeamMembersInput, formsUncheckedUpdateWithoutTeamMembersInput>
  }

  export type formsUpdateWithoutTeamMembersInput = {
    name?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    SubmittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type formsUncheckedUpdateWithoutTeamMembersInput = {
    Teamid?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    SubmittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type teammemberCreateManyTeamInput = {
    id?: number
    name: string
  }

  export type teammemberUpdateWithoutTeamInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type teammemberUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type teammemberUncheckedUpdateManyWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}