module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.32.2). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateProduct {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createProduct(data: ProductCreateInput!): Product!
  updateProduct(data: ProductUpdateInput!, where: ProductWhereUniqueInput!): Product
  updateManyProducts(data: ProductUpdateManyMutationInput!, where: ProductWhereInput): BatchPayload!
  upsertProduct(where: ProductWhereUniqueInput!, create: ProductCreateInput!, update: ProductUpdateInput!): Product!
  deleteProduct(where: ProductWhereUniqueInput!): Product
  deleteManyProducts(where: ProductWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Product {
  id: ID!
  nimi: String
  valmistaja: String
  pullokoko: Float
  hinta: Float
  litrahinta: String
  uutuus: String
  hinnastojarjestys: String
  tyyppi: String
  erityisryhma: String
  oluttyyppi: String
  valmistusmaa: String
  alue: String
  vuosikerta: Int
  etikettimerkintoja: String
  huomautus: String
  rypaleet: String
  luonnehdinta: String
  pakkaustyyppi: String
  suljentatyyppi: String
  alkoholiprosentti: Float
  hapot: Float
  sokeri: Float
  kantavierreprosentti: Float
  vari: String
  ebc: String
  katkerot: String
  ebu: String
  energia: Float
  valikoima: String
  alkoholilitrahinta: Float
}

type ProductConnection {
  pageInfo: PageInfo!
  edges: [ProductEdge]!
  aggregate: AggregateProduct!
}

input ProductCreateInput {
  id: ID
  nimi: String
  valmistaja: String
  pullokoko: Float
  hinta: Float
  litrahinta: String
  uutuus: String
  hinnastojarjestys: String
  tyyppi: String
  erityisryhma: String
  oluttyyppi: String
  valmistusmaa: String
  alue: String
  vuosikerta: Int
  etikettimerkintoja: String
  huomautus: String
  rypaleet: String
  luonnehdinta: String
  pakkaustyyppi: String
  suljentatyyppi: String
  alkoholiprosentti: Float
  hapot: Float
  sokeri: Float
  kantavierreprosentti: Float
  vari: String
  ebc: String
  katkerot: String
  ebu: String
  energia: Float
  valikoima: String
  alkoholilitrahinta: Float
}

type ProductEdge {
  node: Product!
  cursor: String!
}

enum ProductOrderByInput {
  id_ASC
  id_DESC
  nimi_ASC
  nimi_DESC
  valmistaja_ASC
  valmistaja_DESC
  pullokoko_ASC
  pullokoko_DESC
  hinta_ASC
  hinta_DESC
  litrahinta_ASC
  litrahinta_DESC
  uutuus_ASC
  uutuus_DESC
  hinnastojarjestys_ASC
  hinnastojarjestys_DESC
  tyyppi_ASC
  tyyppi_DESC
  erityisryhma_ASC
  erityisryhma_DESC
  oluttyyppi_ASC
  oluttyyppi_DESC
  valmistusmaa_ASC
  valmistusmaa_DESC
  alue_ASC
  alue_DESC
  vuosikerta_ASC
  vuosikerta_DESC
  etikettimerkintoja_ASC
  etikettimerkintoja_DESC
  huomautus_ASC
  huomautus_DESC
  rypaleet_ASC
  rypaleet_DESC
  luonnehdinta_ASC
  luonnehdinta_DESC
  pakkaustyyppi_ASC
  pakkaustyyppi_DESC
  suljentatyyppi_ASC
  suljentatyyppi_DESC
  alkoholiprosentti_ASC
  alkoholiprosentti_DESC
  hapot_ASC
  hapot_DESC
  sokeri_ASC
  sokeri_DESC
  kantavierreprosentti_ASC
  kantavierreprosentti_DESC
  vari_ASC
  vari_DESC
  ebc_ASC
  ebc_DESC
  katkerot_ASC
  katkerot_DESC
  ebu_ASC
  ebu_DESC
  energia_ASC
  energia_DESC
  valikoima_ASC
  valikoima_DESC
  alkoholilitrahinta_ASC
  alkoholilitrahinta_DESC
}

type ProductPreviousValues {
  id: ID!
  nimi: String
  valmistaja: String
  pullokoko: Float
  hinta: Float
  litrahinta: String
  uutuus: String
  hinnastojarjestys: String
  tyyppi: String
  erityisryhma: String
  oluttyyppi: String
  valmistusmaa: String
  alue: String
  vuosikerta: Int
  etikettimerkintoja: String
  huomautus: String
  rypaleet: String
  luonnehdinta: String
  pakkaustyyppi: String
  suljentatyyppi: String
  alkoholiprosentti: Float
  hapot: Float
  sokeri: Float
  kantavierreprosentti: Float
  vari: String
  ebc: String
  katkerot: String
  ebu: String
  energia: Float
  valikoima: String
  alkoholilitrahinta: Float
}

type ProductSubscriptionPayload {
  mutation: MutationType!
  node: Product
  updatedFields: [String!]
  previousValues: ProductPreviousValues
}

input ProductSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProductWhereInput
  AND: [ProductSubscriptionWhereInput!]
  OR: [ProductSubscriptionWhereInput!]
  NOT: [ProductSubscriptionWhereInput!]
}

input ProductUpdateInput {
  nimi: String
  valmistaja: String
  pullokoko: Float
  hinta: Float
  litrahinta: String
  uutuus: String
  hinnastojarjestys: String
  tyyppi: String
  erityisryhma: String
  oluttyyppi: String
  valmistusmaa: String
  alue: String
  vuosikerta: Int
  etikettimerkintoja: String
  huomautus: String
  rypaleet: String
  luonnehdinta: String
  pakkaustyyppi: String
  suljentatyyppi: String
  alkoholiprosentti: Float
  hapot: Float
  sokeri: Float
  kantavierreprosentti: Float
  vari: String
  ebc: String
  katkerot: String
  ebu: String
  energia: Float
  valikoima: String
  alkoholilitrahinta: Float
}

input ProductUpdateManyMutationInput {
  nimi: String
  valmistaja: String
  pullokoko: Float
  hinta: Float
  litrahinta: String
  uutuus: String
  hinnastojarjestys: String
  tyyppi: String
  erityisryhma: String
  oluttyyppi: String
  valmistusmaa: String
  alue: String
  vuosikerta: Int
  etikettimerkintoja: String
  huomautus: String
  rypaleet: String
  luonnehdinta: String
  pakkaustyyppi: String
  suljentatyyppi: String
  alkoholiprosentti: Float
  hapot: Float
  sokeri: Float
  kantavierreprosentti: Float
  vari: String
  ebc: String
  katkerot: String
  ebu: String
  energia: Float
  valikoima: String
  alkoholilitrahinta: Float
}

input ProductWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  nimi: String
  nimi_not: String
  nimi_in: [String!]
  nimi_not_in: [String!]
  nimi_lt: String
  nimi_lte: String
  nimi_gt: String
  nimi_gte: String
  nimi_contains: String
  nimi_not_contains: String
  nimi_starts_with: String
  nimi_not_starts_with: String
  nimi_ends_with: String
  nimi_not_ends_with: String
  valmistaja: String
  valmistaja_not: String
  valmistaja_in: [String!]
  valmistaja_not_in: [String!]
  valmistaja_lt: String
  valmistaja_lte: String
  valmistaja_gt: String
  valmistaja_gte: String
  valmistaja_contains: String
  valmistaja_not_contains: String
  valmistaja_starts_with: String
  valmistaja_not_starts_with: String
  valmistaja_ends_with: String
  valmistaja_not_ends_with: String
  pullokoko: Float
  pullokoko_not: Float
  pullokoko_in: [Float!]
  pullokoko_not_in: [Float!]
  pullokoko_lt: Float
  pullokoko_lte: Float
  pullokoko_gt: Float
  pullokoko_gte: Float
  hinta: Float
  hinta_not: Float
  hinta_in: [Float!]
  hinta_not_in: [Float!]
  hinta_lt: Float
  hinta_lte: Float
  hinta_gt: Float
  hinta_gte: Float
  litrahinta: String
  litrahinta_not: String
  litrahinta_in: [String!]
  litrahinta_not_in: [String!]
  litrahinta_lt: String
  litrahinta_lte: String
  litrahinta_gt: String
  litrahinta_gte: String
  litrahinta_contains: String
  litrahinta_not_contains: String
  litrahinta_starts_with: String
  litrahinta_not_starts_with: String
  litrahinta_ends_with: String
  litrahinta_not_ends_with: String
  uutuus: String
  uutuus_not: String
  uutuus_in: [String!]
  uutuus_not_in: [String!]
  uutuus_lt: String
  uutuus_lte: String
  uutuus_gt: String
  uutuus_gte: String
  uutuus_contains: String
  uutuus_not_contains: String
  uutuus_starts_with: String
  uutuus_not_starts_with: String
  uutuus_ends_with: String
  uutuus_not_ends_with: String
  hinnastojarjestys: String
  hinnastojarjestys_not: String
  hinnastojarjestys_in: [String!]
  hinnastojarjestys_not_in: [String!]
  hinnastojarjestys_lt: String
  hinnastojarjestys_lte: String
  hinnastojarjestys_gt: String
  hinnastojarjestys_gte: String
  hinnastojarjestys_contains: String
  hinnastojarjestys_not_contains: String
  hinnastojarjestys_starts_with: String
  hinnastojarjestys_not_starts_with: String
  hinnastojarjestys_ends_with: String
  hinnastojarjestys_not_ends_with: String
  tyyppi: String
  tyyppi_not: String
  tyyppi_in: [String!]
  tyyppi_not_in: [String!]
  tyyppi_lt: String
  tyyppi_lte: String
  tyyppi_gt: String
  tyyppi_gte: String
  tyyppi_contains: String
  tyyppi_not_contains: String
  tyyppi_starts_with: String
  tyyppi_not_starts_with: String
  tyyppi_ends_with: String
  tyyppi_not_ends_with: String
  erityisryhma: String
  erityisryhma_not: String
  erityisryhma_in: [String!]
  erityisryhma_not_in: [String!]
  erityisryhma_lt: String
  erityisryhma_lte: String
  erityisryhma_gt: String
  erityisryhma_gte: String
  erityisryhma_contains: String
  erityisryhma_not_contains: String
  erityisryhma_starts_with: String
  erityisryhma_not_starts_with: String
  erityisryhma_ends_with: String
  erityisryhma_not_ends_with: String
  oluttyyppi: String
  oluttyyppi_not: String
  oluttyyppi_in: [String!]
  oluttyyppi_not_in: [String!]
  oluttyyppi_lt: String
  oluttyyppi_lte: String
  oluttyyppi_gt: String
  oluttyyppi_gte: String
  oluttyyppi_contains: String
  oluttyyppi_not_contains: String
  oluttyyppi_starts_with: String
  oluttyyppi_not_starts_with: String
  oluttyyppi_ends_with: String
  oluttyyppi_not_ends_with: String
  valmistusmaa: String
  valmistusmaa_not: String
  valmistusmaa_in: [String!]
  valmistusmaa_not_in: [String!]
  valmistusmaa_lt: String
  valmistusmaa_lte: String
  valmistusmaa_gt: String
  valmistusmaa_gte: String
  valmistusmaa_contains: String
  valmistusmaa_not_contains: String
  valmistusmaa_starts_with: String
  valmistusmaa_not_starts_with: String
  valmistusmaa_ends_with: String
  valmistusmaa_not_ends_with: String
  alue: String
  alue_not: String
  alue_in: [String!]
  alue_not_in: [String!]
  alue_lt: String
  alue_lte: String
  alue_gt: String
  alue_gte: String
  alue_contains: String
  alue_not_contains: String
  alue_starts_with: String
  alue_not_starts_with: String
  alue_ends_with: String
  alue_not_ends_with: String
  vuosikerta: Int
  vuosikerta_not: Int
  vuosikerta_in: [Int!]
  vuosikerta_not_in: [Int!]
  vuosikerta_lt: Int
  vuosikerta_lte: Int
  vuosikerta_gt: Int
  vuosikerta_gte: Int
  etikettimerkintoja: String
  etikettimerkintoja_not: String
  etikettimerkintoja_in: [String!]
  etikettimerkintoja_not_in: [String!]
  etikettimerkintoja_lt: String
  etikettimerkintoja_lte: String
  etikettimerkintoja_gt: String
  etikettimerkintoja_gte: String
  etikettimerkintoja_contains: String
  etikettimerkintoja_not_contains: String
  etikettimerkintoja_starts_with: String
  etikettimerkintoja_not_starts_with: String
  etikettimerkintoja_ends_with: String
  etikettimerkintoja_not_ends_with: String
  huomautus: String
  huomautus_not: String
  huomautus_in: [String!]
  huomautus_not_in: [String!]
  huomautus_lt: String
  huomautus_lte: String
  huomautus_gt: String
  huomautus_gte: String
  huomautus_contains: String
  huomautus_not_contains: String
  huomautus_starts_with: String
  huomautus_not_starts_with: String
  huomautus_ends_with: String
  huomautus_not_ends_with: String
  rypaleet: String
  rypaleet_not: String
  rypaleet_in: [String!]
  rypaleet_not_in: [String!]
  rypaleet_lt: String
  rypaleet_lte: String
  rypaleet_gt: String
  rypaleet_gte: String
  rypaleet_contains: String
  rypaleet_not_contains: String
  rypaleet_starts_with: String
  rypaleet_not_starts_with: String
  rypaleet_ends_with: String
  rypaleet_not_ends_with: String
  luonnehdinta: String
  luonnehdinta_not: String
  luonnehdinta_in: [String!]
  luonnehdinta_not_in: [String!]
  luonnehdinta_lt: String
  luonnehdinta_lte: String
  luonnehdinta_gt: String
  luonnehdinta_gte: String
  luonnehdinta_contains: String
  luonnehdinta_not_contains: String
  luonnehdinta_starts_with: String
  luonnehdinta_not_starts_with: String
  luonnehdinta_ends_with: String
  luonnehdinta_not_ends_with: String
  pakkaustyyppi: String
  pakkaustyyppi_not: String
  pakkaustyyppi_in: [String!]
  pakkaustyyppi_not_in: [String!]
  pakkaustyyppi_lt: String
  pakkaustyyppi_lte: String
  pakkaustyyppi_gt: String
  pakkaustyyppi_gte: String
  pakkaustyyppi_contains: String
  pakkaustyyppi_not_contains: String
  pakkaustyyppi_starts_with: String
  pakkaustyyppi_not_starts_with: String
  pakkaustyyppi_ends_with: String
  pakkaustyyppi_not_ends_with: String
  suljentatyyppi: String
  suljentatyyppi_not: String
  suljentatyyppi_in: [String!]
  suljentatyyppi_not_in: [String!]
  suljentatyyppi_lt: String
  suljentatyyppi_lte: String
  suljentatyyppi_gt: String
  suljentatyyppi_gte: String
  suljentatyyppi_contains: String
  suljentatyyppi_not_contains: String
  suljentatyyppi_starts_with: String
  suljentatyyppi_not_starts_with: String
  suljentatyyppi_ends_with: String
  suljentatyyppi_not_ends_with: String
  alkoholiprosentti: Float
  alkoholiprosentti_not: Float
  alkoholiprosentti_in: [Float!]
  alkoholiprosentti_not_in: [Float!]
  alkoholiprosentti_lt: Float
  alkoholiprosentti_lte: Float
  alkoholiprosentti_gt: Float
  alkoholiprosentti_gte: Float
  hapot: Float
  hapot_not: Float
  hapot_in: [Float!]
  hapot_not_in: [Float!]
  hapot_lt: Float
  hapot_lte: Float
  hapot_gt: Float
  hapot_gte: Float
  sokeri: Float
  sokeri_not: Float
  sokeri_in: [Float!]
  sokeri_not_in: [Float!]
  sokeri_lt: Float
  sokeri_lte: Float
  sokeri_gt: Float
  sokeri_gte: Float
  kantavierreprosentti: Float
  kantavierreprosentti_not: Float
  kantavierreprosentti_in: [Float!]
  kantavierreprosentti_not_in: [Float!]
  kantavierreprosentti_lt: Float
  kantavierreprosentti_lte: Float
  kantavierreprosentti_gt: Float
  kantavierreprosentti_gte: Float
  vari: String
  vari_not: String
  vari_in: [String!]
  vari_not_in: [String!]
  vari_lt: String
  vari_lte: String
  vari_gt: String
  vari_gte: String
  vari_contains: String
  vari_not_contains: String
  vari_starts_with: String
  vari_not_starts_with: String
  vari_ends_with: String
  vari_not_ends_with: String
  ebc: String
  ebc_not: String
  ebc_in: [String!]
  ebc_not_in: [String!]
  ebc_lt: String
  ebc_lte: String
  ebc_gt: String
  ebc_gte: String
  ebc_contains: String
  ebc_not_contains: String
  ebc_starts_with: String
  ebc_not_starts_with: String
  ebc_ends_with: String
  ebc_not_ends_with: String
  katkerot: String
  katkerot_not: String
  katkerot_in: [String!]
  katkerot_not_in: [String!]
  katkerot_lt: String
  katkerot_lte: String
  katkerot_gt: String
  katkerot_gte: String
  katkerot_contains: String
  katkerot_not_contains: String
  katkerot_starts_with: String
  katkerot_not_starts_with: String
  katkerot_ends_with: String
  katkerot_not_ends_with: String
  ebu: String
  ebu_not: String
  ebu_in: [String!]
  ebu_not_in: [String!]
  ebu_lt: String
  ebu_lte: String
  ebu_gt: String
  ebu_gte: String
  ebu_contains: String
  ebu_not_contains: String
  ebu_starts_with: String
  ebu_not_starts_with: String
  ebu_ends_with: String
  ebu_not_ends_with: String
  energia: Float
  energia_not: Float
  energia_in: [Float!]
  energia_not_in: [Float!]
  energia_lt: Float
  energia_lte: Float
  energia_gt: Float
  energia_gte: Float
  valikoima: String
  valikoima_not: String
  valikoima_in: [String!]
  valikoima_not_in: [String!]
  valikoima_lt: String
  valikoima_lte: String
  valikoima_gt: String
  valikoima_gte: String
  valikoima_contains: String
  valikoima_not_contains: String
  valikoima_starts_with: String
  valikoima_not_starts_with: String
  valikoima_ends_with: String
  valikoima_not_ends_with: String
  alkoholilitrahinta: Float
  alkoholilitrahinta_not: Float
  alkoholilitrahinta_in: [Float!]
  alkoholilitrahinta_not_in: [Float!]
  alkoholilitrahinta_lt: Float
  alkoholilitrahinta_lte: Float
  alkoholilitrahinta_gt: Float
  alkoholilitrahinta_gte: Float
  AND: [ProductWhereInput!]
  OR: [ProductWhereInput!]
  NOT: [ProductWhereInput!]
}

input ProductWhereUniqueInput {
  id: ID
}

type Query {
  product(where: ProductWhereUniqueInput!): Product
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product]!
  productsConnection(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductConnection!
  node(id: ID!): Node
}

type Subscription {
  product(where: ProductSubscriptionWhereInput): ProductSubscriptionPayload
}
`
      }
    