import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserSettingsService } from './user-settings.service';
import { UserSetting } from './entities/user-setting.entity';
import { CreateUserSettingInput } from './dto/create-user-setting.input';
// import { UpdateUserSettingInput } from './dto/update-user-setting.input';
import { mockUserSettings } from 'src/__mocks__/mockUserSettings';

@Resolver(() => UserSetting)
export class UserSettingsResolver {
  constructor(private readonly userSettingsService: UserSettingsService) {}

  @Mutation(() => UserSetting)
  createUserSetting(
    @Args('createUserSettingData')
    createUserSettingData: CreateUserSettingInput,
  ) {
    mockUserSettings.push(createUserSettingData);
    return createUserSettingData;
  }
}
