import NextAuth, { NextAuthOptions } from "next-auth"
import KeycloakProvider from "next-auth/providers/keycloak";

export const authOptions: NextAuthOptions = {
  providers: [
    KeycloakProvider({
      clientId: 'account',
      clientSecret: 'nKoCCwvDFmihaYEs91HuVfSCgppRa5OA',
      issuer: 'https://osamhack2022-v2-web-mili-meet-broker-gv5wqp76qjx2v66p-8080.preview.app.github.dev/realms/Mili-Meet',
    })
  ]
}

export default NextAuth(authOptions)