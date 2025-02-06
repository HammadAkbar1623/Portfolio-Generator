/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LayoutImport } from './routes/_layout'
import { Route as IndexImport } from './routes/index'
import { Route as LayoutSignupIndexImport } from './routes/_layout/signup/index'
import { Route as LayoutSigninIndexImport } from './routes/_layout/signin/index'
import { Route as LayoutHomeIndexImport } from './routes/_layout/home/index'

// Create/Update Routes

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)





const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const LayoutSignupIndexRoute = LayoutSignupIndexImport.update({
  id: '/signup/',
  path: '/signup/',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutSigninIndexRoute = LayoutSigninIndexImport.update({
  id: '/signin/',
  path: '/signin/',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutHomeIndexRoute = LayoutHomeIndexImport.update({
  id: '/home/',
  path: '/home/',
  getParentRoute: () => LayoutRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/AuthContext': {
      id: '/AuthContext'
      path: '/AuthContext'
      fullPath: '/AuthContext'
      preLoaderRoute: typeof AuthContextImport
      parentRoute: typeof rootRoute
    }
    '/ProtectedRoute': {
      id: '/ProtectedRoute'
      path: '/ProtectedRoute'
      fullPath: '/ProtectedRoute'
      preLoaderRoute: typeof ProtectedRouteImport
      parentRoute: typeof rootRoute
    }
    '/_layout': {
      id: '/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/_layout/home/': {
      id: '/_layout/home/'
      path: '/home'
      fullPath: '/home'
      preLoaderRoute: typeof LayoutHomeIndexImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/signin/': {
      id: '/_layout/signin/'
      path: '/signin'
      fullPath: '/signin'
      preLoaderRoute: typeof LayoutSigninIndexImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/signup/': {
      id: '/_layout/signup/'
      path: '/signup'
      fullPath: '/signup'
      preLoaderRoute: typeof LayoutSignupIndexImport
      parentRoute: typeof LayoutImport
    }
  }
}

// Create and export the route tree

interface LayoutRouteChildren {
  LayoutHomeIndexRoute: typeof LayoutHomeIndexRoute
  LayoutSigninIndexRoute: typeof LayoutSigninIndexRoute
  LayoutSignupIndexRoute: typeof LayoutSignupIndexRoute
}

const LayoutRouteChildren: LayoutRouteChildren = {
  LayoutHomeIndexRoute: LayoutHomeIndexRoute,
  LayoutSigninIndexRoute: LayoutSigninIndexRoute,
  LayoutSignupIndexRoute: LayoutSignupIndexRoute,
}

const LayoutRouteWithChildren =
  LayoutRoute._addFileChildren(LayoutRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/AuthContext': typeof AuthContextRoute
  '/ProtectedRoute': typeof ProtectedRouteRoute
  '': typeof LayoutRouteWithChildren
  '/home': typeof LayoutHomeIndexRoute
  '/signin': typeof LayoutSigninIndexRoute
  '/signup': typeof LayoutSignupIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/AuthContext': typeof AuthContextRoute
  '/ProtectedRoute': typeof ProtectedRouteRoute
  '': typeof LayoutRouteWithChildren
  '/home': typeof LayoutHomeIndexRoute
  '/signin': typeof LayoutSigninIndexRoute
  '/signup': typeof LayoutSignupIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/AuthContext': typeof AuthContextRoute
  '/ProtectedRoute': typeof ProtectedRouteRoute
  '/_layout': typeof LayoutRouteWithChildren
  '/_layout/home/': typeof LayoutHomeIndexRoute
  '/_layout/signin/': typeof LayoutSigninIndexRoute
  '/_layout/signup/': typeof LayoutSignupIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/AuthContext'
    | '/ProtectedRoute'
    | ''
    | '/home'
    | '/signin'
    | '/signup'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/AuthContext'
    | '/ProtectedRoute'
    | ''
    | '/home'
    | '/signin'
    | '/signup'
  id:
    | '__root__'
    | '/'
    | '/AuthContext'
    | '/ProtectedRoute'
    | '/_layout'
    | '/_layout/home/'
    | '/_layout/signin/'
    | '/_layout/signup/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AuthContextRoute: typeof AuthContextRoute
  ProtectedRouteRoute: typeof ProtectedRouteRoute
  LayoutRoute: typeof LayoutRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  LayoutRoute: LayoutRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/AuthContext",
        "/ProtectedRoute",
        "/_layout"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/AuthContext": {
      "filePath": "AuthContext.tsx"
    },
    "/ProtectedRoute": {
      "filePath": "ProtectedRoute.tsx"
    },
    "/_layout": {
      "filePath": "_layout.tsx",
      "children": [
        "/_layout/home/",
        "/_layout/signin/",
        "/_layout/signup/"
      ]
    },
    "/_layout/home/": {
      "filePath": "_layout/home/index.tsx",
      "parent": "/_layout"
    },
    "/_layout/signin/": {
      "filePath": "_layout/signin/index.tsx",
      "parent": "/_layout"
    },
    "/_layout/signup/": {
      "filePath": "_layout/signup/index.tsx",
      "parent": "/_layout"
    }
  }
}
ROUTE_MANIFEST_END */
