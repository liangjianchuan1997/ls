import mongoose from 'mongoose';
const scheme = new mongoose.Schema({
  // 用户Id
  userId: { type: String },
  // 组织id
  _boundToObjectId: { type: String },
  // 组织类别
  boundToObjectType: { type: String },
  // 邮箱
  email: { type: String },
  // 用户名
  name: { type: String },
  // 头像地址
  avatarUrl: { type: String },
  // 是否激活
  isActive: { type: String },
  // 手机号码
  phone: { type: String },
  // 职位
  title: { type: String },
  // 更新时间
  updated: { type: Date },
  // 拼音
  pinyin: { type: String },
  // py简写
  py: { type: String },
  // 团队列表
  teams: [{ type: String }],
  // 更新时间
  updateAt: { type: Number, default: Date.now() },
  // 创建时间
  createAt: { type: Number, default: Date.now() }
});
scheme.index({ userId: 1 }, { unique: true });
scheme.index({ pinyin: 1 }, { py: 1 });

export default mongoose.model('user', scheme);
