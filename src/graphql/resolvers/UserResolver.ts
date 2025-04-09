import { UserSetting } from './../models/UserSetting';
import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { User } from '../models/User';
import { mockUsers } from 'src/__mocks__/mockUsers';
import { mockUserSettings } from 'src/__mocks__/mockUserSettings';

let incrementalId = 3;
@Resolver(() => User)
export class UserResolver {
  @Query(() => User, { nullable: true })
  getUserById(@Args('id', { type: () => Int }) id: number) {
    return mockUsers.find((user) => user.id === id);
  }

  @Query(() => [User])
  getUsers() {
    return mockUsers;
  }

  @ResolveField(() => UserSetting, { name: 'settings', nullable: true })
  getUserSettings(@Parent() user: User) {
    return mockUserSettings.find((setting) => setting.userId === user.id);
  }

  @Mutation(() => User)
  createUser(
    @Args('username') username: string,
    @Args('displayName', { nullable: true }) displayName: string,
  ) {
    const newUser: User = {
      id: ++incrementalId,
      username,
      displayName,
    };
    mockUsers.push(newUser);
    return newUser;
  }
}
