import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserSetting } from '../models/UserSetting';
import { CreateUserSettingInput } from '../utils/CreateUserSettingInput';
import { mockUserSettings } from 'src/__mocks__/mockUserSettings';

@Resolver(() => UserSetting)
export class UserSettingResolver {
  @Mutation(() => UserSetting)
  createUserSetting(
    @Args('createUserSettingData')
    createUserSettingData: CreateUserSettingInput,
  ) {
    mockUserSettings.push(createUserSettingData);
    return createUserSettingData;
  }
}
