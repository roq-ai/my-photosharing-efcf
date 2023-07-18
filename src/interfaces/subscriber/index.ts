import { MediaInterface } from 'interfaces/media';
import { SubscriptionInterface } from 'interfaces/subscription';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface SubscriberInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  media?: MediaInterface[];
  subscription?: SubscriptionInterface[];
  user?: UserInterface;
  _count?: {
    media?: number;
    subscription?: number;
  };
}

export interface SubscriberGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
