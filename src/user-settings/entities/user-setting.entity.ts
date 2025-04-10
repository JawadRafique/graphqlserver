import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('user_settings')
@ObjectType()
export class UserSetting {
  @PrimaryColumn()
  @Field(() => Int)
  userId: number;

  @Column()
  @Field({ defaultValue: false })
  receiveNotifications?: boolean;

  @Column()
  @Field({ defaultValue: false })
  receiveEmails?: boolean;
}
