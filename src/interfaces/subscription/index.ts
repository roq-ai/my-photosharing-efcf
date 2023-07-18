import { SubscriberInterface } from 'interfaces/subscriber';
import { GetQueryInterface } from 'interfaces';

export interface SubscriptionInterface {
  id?: string;
  type: string;
  storage_limit: number;
  subscriber_id?: string;
  created_at?: any;
  updated_at?: any;

  subscriber?: SubscriberInterface;
  _count?: {};
}

export interface SubscriptionGetQueryInterface extends GetQueryInterface {
  id?: string;
  type?: string;
  subscriber_id?: string;
}
