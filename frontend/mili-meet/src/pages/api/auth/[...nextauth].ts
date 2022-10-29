import NextAuth, { NextAuthOptions } from "next-auth"
import KeycloakProvider from "next-auth/providers/keycloak";

export const authOptions: NextAuthOptions = {
  providers: [
    KeycloakProvider({
      clientId: 'frontend-client',
      clientSecret: '6DT9hwLgXVzxpOp9So9JCJ2dtxPKicOS',
      issuer: 'https://osamhack2022-web-mili-meet-broker-7rrgrq5695q2pp9-8080.preview.app.github.dev/realms/mili-meet',
    })
  ]
}

export default NextAuth(authOptions)
