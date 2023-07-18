const mapping: Record<string, string> = {
  media: 'media',
  subscribers: 'subscriber',
  subscriptions: 'subscription',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
