import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { mockUsers } from 'src/__mocks__/mockUsers';
import { mockUserSettings } from 'src/__mocks__/mockUserSettings';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UserSetting } from 'src/user-settings/entities/user-setting.entity';

let incrementalId = 3;
@Resolver(() => User)
export class UsersResolver {
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
  createUser(@Args('createUserData') createUserData: CreateUserInput) {
    const { username, displayName } = createUserData;
    const newUser: User = {
      id: ++incrementalId,
      username,
      displayName,
    };
    mockUsers.push(newUser);
    return newUser;
  }
}
