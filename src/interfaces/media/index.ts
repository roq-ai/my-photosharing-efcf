import { SubscriberInterface } from 'interfaces/subscriber';
import { GetQueryInterface } from 'interfaces';

export interface MediaInterface {
  id?: string;
  type: string;
  file_path: string;
  subscriber_id?: string;
  created_at?: any;
  updated_at?: any;

  subscriber?: SubscriberInterface;
  _count?: {};
}

export interface MediaGetQueryInterface extends GetQueryInterface {
  id?: string;
  type?: string;
  file_path?: string;
  subscriber_id?: string;
}
