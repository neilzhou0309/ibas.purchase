package org.colorcoding.ibas.purchase.bo.purchaserequest;

import java.math.BigDecimal;

import org.colorcoding.ibas.bobas.bo.IBODocumentLine;
import org.colorcoding.ibas.bobas.data.DateTime;
import org.colorcoding.ibas.bobas.data.emBOStatus;
import org.colorcoding.ibas.bobas.data.emDocumentStatus;
import org.colorcoding.ibas.bobas.data.emYesNo;

/**
 * 采购申请-行 接口
 * 
 */
public interface IPurchaseRequestItem extends IBODocumentLine {

	/**
	 * 获取-编码
	 * 
	 * @return 值
	 */
	Integer getDocEntry();

	/**
	 * 设置-编码
	 * 
	 * @param value 值
	 */
	void setDocEntry(Integer value);

	/**
	 * 获取-行号
	 * 
	 * @return 值
	 */
	Integer getLineId();

	/**
	 * 设置-行号
	 * 
	 * @param value 值
	 */
	void setLineId(Integer value);

	/**
	 * 获取-显示顺序
	 * 
	 * @return 值
	 */
	Integer getVisOrder();

	/**
	 * 设置-显示顺序
	 * 
	 * @param value 值
	 */
	void setVisOrder(Integer value);

	/**
	 * 获取-类型
	 * 
	 * @return 值
	 */
	String getObjectCode();

	/**
	 * 设置-类型
	 * 
	 * @param value 值
	 */
	void setObjectCode(String value);

	/**
	 * 获取-实例号（版本）
	 * 
	 * @return 值
	 */
	Integer getLogInst();

	/**
	 * 设置-实例号（版本）
	 * 
	 * @param value 值
	 */
	void setLogInst(Integer value);

	/**
	 * 获取-数据源
	 * 
	 * @return 值
	 */
	String getDataSource();

	/**
	 * 设置-数据源
	 * 
	 * @param value 值
	 */
	void setDataSource(String value);

	/**
	 * 获取-取消
	 * 
	 * @return 值
	 */
	emYesNo getCanceled();

	/**
	 * 设置-取消
	 * 
	 * @param value 值
	 */
	void setCanceled(emYesNo value);

	/**
	 * 获取-状态
	 * 
	 * @return 值
	 */
	emBOStatus getStatus();

	/**
	 * 设置-状态
	 * 
	 * @param value 值
	 */
	void setStatus(emBOStatus value);

	/**
	 * 获取-单据状态
	 * 
	 * @return 值
	 */
	emDocumentStatus getLineStatus();

	/**
	 * 设置-单据状态
	 * 
	 * @param value 值
	 */
	void setLineStatus(emDocumentStatus value);

	/**
	 * 获取-创建日期
	 * 
	 * @return 值
	 */
	DateTime getCreateDate();

	/**
	 * 设置-创建日期
	 * 
	 * @param value 值
	 */
	void setCreateDate(DateTime value);

	/**
	 * 获取-创建时间
	 * 
	 * @return 值
	 */
	Short getCreateTime();

	/**
	 * 设置-创建时间
	 * 
	 * @param value 值
	 */
	void setCreateTime(Short value);

	/**
	 * 获取-修改日期
	 * 
	 * @return 值
	 */
	DateTime getUpdateDate();

	/**
	 * 设置-修改日期
	 * 
	 * @param value 值
	 */
	void setUpdateDate(DateTime value);

	/**
	 * 获取-修改时间
	 * 
	 * @return 值
	 */
	Short getUpdateTime();

	/**
	 * 设置-修改时间
	 * 
	 * @param value 值
	 */
	void setUpdateTime(Short value);

	/**
	 * 获取-创建用户
	 * 
	 * @return 值
	 */
	Integer getCreateUserSign();

	/**
	 * 设置-创建用户
	 * 
	 * @param value 值
	 */
	void setCreateUserSign(Integer value);

	/**
	 * 获取-修改用户
	 * 
	 * @return 值
	 */
	Integer getUpdateUserSign();

	/**
	 * 设置-修改用户
	 * 
	 * @param value 值
	 */
	void setUpdateUserSign(Integer value);

	/**
	 * 获取-创建动作标识
	 * 
	 * @return 值
	 */
	String getCreateActionId();

	/**
	 * 设置-创建动作标识
	 * 
	 * @param value 值
	 */
	void setCreateActionId(String value);

	/**
	 * 获取-更新动作标识
	 * 
	 * @return 值
	 */
	String getUpdateActionId();

	/**
	 * 设置-更新动作标识
	 * 
	 * @param value 值
	 */
	void setUpdateActionId(String value);

	/**
	 * 获取-参考1
	 * 
	 * @return 值
	 */
	String getReference1();

	/**
	 * 设置-参考1
	 * 
	 * @param value 值
	 */
	void setReference1(String value);

	/**
	 * 获取-参考2
	 * 
	 * @return 值
	 */
	String getReference2();

	/**
	 * 设置-参考2
	 * 
	 * @param value 值
	 */
	void setReference2(String value);

	/**
	 * 获取-已引用
	 * 
	 * @return 值
	 */
	emYesNo getReferenced();

	/**
	 * 设置-已引用
	 * 
	 * @param value 值
	 */
	void setReferenced(emYesNo value);

	/**
	 * 获取-已删除
	 * 
	 * @return 值
	 */
	emYesNo getDeleted();

	/**
	 * 设置-已删除
	 * 
	 * @param value 值
	 */
	void setDeleted(emYesNo value);

	/**
	 * 获取-基于类型
	 * 
	 * @return 值
	 */
	String getBaseDocumentType();

	/**
	 * 设置-基于类型
	 * 
	 * @param value 值
	 */
	void setBaseDocumentType(String value);

	/**
	 * 获取-基于标识
	 * 
	 * @return 值
	 */
	Integer getBaseDocumentEntry();

	/**
	 * 设置-基于标识
	 * 
	 * @param value 值
	 */
	void setBaseDocumentEntry(Integer value);

	/**
	 * 获取-基于行号
	 * 
	 * @return 值
	 */
	Integer getBaseDocumentLineId();

	/**
	 * 设置-基于行号
	 * 
	 * @param value 值
	 */
	void setBaseDocumentLineId(Integer value);

	/**
	 * 获取-原始类型
	 * 
	 * @return 值
	 */
	String getOriginalDocumentType();

	/**
	 * 设置-原始类型
	 * 
	 * @param value 值
	 */
	void setOriginalDocumentType(String value);

	/**
	 * 获取-原始标识
	 * 
	 * @return 值
	 */
	Integer getOriginalDocumentEntry();

	/**
	 * 设置-原始标识
	 * 
	 * @param value 值
	 */
	void setOriginalDocumentEntry(Integer value);

	/**
	 * 获取-原始行号
	 * 
	 * @return 值
	 */
	Integer getOriginalDocumentLineId();

	/**
	 * 设置-原始行号
	 * 
	 * @param value 值
	 */
	void setOriginalDocumentLineId(Integer value);

	/**
	 * 获取-物料编码
	 * 
	 * @return 值
	 */
	String getItemCode();

	/**
	 * 设置-物料编码
	 * 
	 * @param value 值
	 */
	void setItemCode(String value);

	/**
	 * 获取-物料标识
	 * 
	 * @return 值
	 */
	String getItemSign();

	/**
	 * 设置-物料标识
	 * 
	 * @param value 值
	 */
	void setItemSign(String value);

	/**
	 * 获取-物料/服务描述
	 * 
	 * @return 值
	 */
	String getItemDescription();

	/**
	 * 设置-物料/服务描述
	 * 
	 * @param value 值
	 */
	void setItemDescription(String value);

	/**
	 * 获取-序号管理
	 * 
	 * @return 值
	 */
	emYesNo getSerialManagement();

	/**
	 * 设置-序号管理
	 * 
	 * @param value 值
	 */
	void setSerialManagement(emYesNo value);

	/**
	 * 获取-批号管理
	 * 
	 * @return 值
	 */
	emYesNo getBatchManagement();

	/**
	 * 设置-批号管理
	 * 
	 * @param value 值
	 */
	void setBatchManagement(emYesNo value);

	/**
	 * 获取-数量
	 * 
	 * @return 值
	 */
	BigDecimal getQuantity();

	/**
	 * 设置-数量
	 * 
	 * @param value 值
	 */
	void setQuantity(BigDecimal value);

	/**
	 * 设置-数量
	 * 
	 * @param value 值
	 */
	void setQuantity(String value);

	/**
	 * 设置-数量
	 * 
	 * @param value 值
	 */
	void setQuantity(int value);

	/**
	 * 设置-数量
	 * 
	 * @param value 值
	 */
	void setQuantity(double value);

	/**
	 * 获取-单位
	 * 
	 * @return 值
	 */
	String getUOM();

	/**
	 * 设置-单位
	 * 
	 * @param value 值
	 */
	void setUOM(String value);

	/**
	 * 获取-供应商
	 * 
	 * @return 值
	 */
	String getSupplier();

	/**
	 * 设置-供应商
	 * 
	 * @param value 值
	 */
	void setSupplier(String value);

	/**
	 * 获取-价格
	 * 
	 * @return 值
	 */
	BigDecimal getPrice();

	/**
	 * 设置-价格
	 * 
	 * @param value 值
	 */
	void setPrice(BigDecimal value);

	/**
	 * 设置-价格
	 * 
	 * @param value 值
	 */
	void setPrice(String value);

	/**
	 * 设置-价格
	 * 
	 * @param value 值
	 */
	void setPrice(int value);

	/**
	 * 设置-价格
	 * 
	 * @param value 值
	 */
	void setPrice(double value);

	/**
	 * 获取-货币
	 * 
	 * @return 值
	 */
	String getCurrency();

	/**
	 * 设置-货币
	 * 
	 * @param value 值
	 */
	void setCurrency(String value);

	/**
	 * 获取-汇率
	 * 
	 * @return 值
	 */
	BigDecimal getRate();

	/**
	 * 设置-汇率
	 * 
	 * @param value 值
	 */
	void setRate(BigDecimal value);

	/**
	 * 设置-汇率
	 * 
	 * @param value 值
	 */
	void setRate(String value);

	/**
	 * 设置-汇率
	 * 
	 * @param value 值
	 */
	void setRate(int value);

	/**
	 * 设置-汇率
	 * 
	 * @param value 值
	 */
	void setRate(double value);

	/**
	 * 获取-行总计
	 * 
	 * @return 值
	 */
	BigDecimal getLineTotal();

	/**
	 * 设置-行总计
	 * 
	 * @param value 值
	 */
	void setLineTotal(BigDecimal value);

	/**
	 * 设置-行总计
	 * 
	 * @param value 值
	 */
	void setLineTotal(String value);

	/**
	 * 设置-行总计
	 * 
	 * @param value 值
	 */
	void setLineTotal(int value);

	/**
	 * 设置-行总计
	 * 
	 * @param value 值
	 */
	void setLineTotal(double value);

	/**
	 * 获取-需求日期
	 * 
	 * @return 值
	 */
	DateTime getRequestDate();

	/**
	 * 设置-需求日期
	 * 
	 * @param value 值
	 */
	void setRequestDate(DateTime value);

	/**
	 * 获取-已清数量
	 * 
	 * @return 值
	 */
	BigDecimal getClosedQuantity();

	/**
	 * 设置-已清数量
	 * 
	 * @param value 值
	 */
	void setClosedQuantity(BigDecimal value);

	/**
	 * 设置-已清数量
	 * 
	 * @param value 值
	 */
	void setClosedQuantity(String value);

	/**
	 * 设置-已清数量
	 * 
	 * @param value 值
	 */
	void setClosedQuantity(int value);

	/**
	 * 设置-已清数量
	 * 
	 * @param value 值
	 */
	void setClosedQuantity(double value);

	/**
	 * 获取-税定义
	 * 
	 * @return 值
	 */
	String getTax();

	/**
	 * 设置-税定义
	 * 
	 * @param value 值
	 */
	void setTax(String value);

	/**
	 * 获取-税率
	 * 
	 * @return 值
	 */
	BigDecimal getTaxRate();

	/**
	 * 设置-税率
	 * 
	 * @param value 值
	 */
	void setTaxRate(BigDecimal value);

	/**
	 * 设置-税率
	 * 
	 * @param value 值
	 */
	void setTaxRate(String value);

	/**
	 * 设置-税率
	 * 
	 * @param value 值
	 */
	void setTaxRate(int value);

	/**
	 * 设置-税率
	 * 
	 * @param value 值
	 */
	void setTaxRate(double value);

	/**
	 * 获取-税总额
	 * 
	 * @return 值
	 */
	BigDecimal getTaxTotal();

	/**
	 * 设置-税总额
	 * 
	 * @param value 值
	 */
	void setTaxTotal(BigDecimal value);

	/**
	 * 设置-税总额
	 * 
	 * @param value 值
	 */
	void setTaxTotal(String value);

	/**
	 * 设置-税总额
	 * 
	 * @param value 值
	 */
	void setTaxTotal(int value);

	/**
	 * 设置-税总额
	 * 
	 * @param value 值
	 */
	void setTaxTotal(double value);

	/**
	 * 获取-税前价格
	 * 
	 * @return 值
	 */
	BigDecimal getPreTaxPrice();

	/**
	 * 设置-税前价格
	 * 
	 * @param value 值
	 */
	void setPreTaxPrice(BigDecimal value);

	/**
	 * 设置-税前价格
	 * 
	 * @param value 值
	 */
	void setPreTaxPrice(String value);

	/**
	 * 设置-税前价格
	 * 
	 * @param value 值
	 */
	void setPreTaxPrice(int value);

	/**
	 * 设置-税前价格
	 * 
	 * @param value 值
	 */
	void setPreTaxPrice(double value);

	/**
	 * 获取-税前行总计
	 * 
	 * @return 值
	 */
	BigDecimal getPreTaxLineTotal();

	/**
	 * 设置-税前行总计
	 * 
	 * @param value 值
	 */
	void setPreTaxLineTotal(BigDecimal value);

	/**
	 * 设置-税前行总计
	 * 
	 * @param value 值
	 */
	void setPreTaxLineTotal(String value);

	/**
	 * 设置-税前行总计
	 * 
	 * @param value 值
	 */
	void setPreTaxLineTotal(int value);

	/**
	 * 设置-税前行总计
	 * 
	 * @param value 值
	 */
	void setPreTaxLineTotal(double value);

	/**
	 * 获取-分配规则1
	 * 
	 * @return 值
	 */
	String getDistributionRule1();

	/**
	 * 设置-分配规则1
	 * 
	 * @param value 值
	 */
	void setDistributionRule1(String value);

	/**
	 * 获取-分配规则2
	 * 
	 * @return 值
	 */
	String getDistributionRule2();

	/**
	 * 设置-分配规则2
	 * 
	 * @param value 值
	 */
	void setDistributionRule2(String value);

	/**
	 * 获取-分配规则3
	 * 
	 * @return 值
	 */
	String getDistributionRule3();

	/**
	 * 设置-分配规则3
	 * 
	 * @param value 值
	 */
	void setDistributionRule3(String value);

	/**
	 * 获取-分配规则4
	 * 
	 * @return 值
	 */
	String getDistributionRule4();

	/**
	 * 设置-分配规则4
	 * 
	 * @param value 值
	 */
	void setDistributionRule4(String value);

	/**
	 * 获取-分配规则5
	 * 
	 * @return 值
	 */
	String getDistributionRule5();

	/**
	 * 设置-分配规则5
	 * 
	 * @param value 值
	 */
	void setDistributionRule5(String value);

	/**
	 * 获取-采购申请-行-额外信息集合
	 * 
	 * @return 值
	 */
	IPurchaseRequestItemExtras getPurchaseRequestItemExtras();

	/**
	 * 设置-采购申请-行-额外信息集合
	 * 
	 * @param value 值
	 */
	void setPurchaseRequestItemExtras(IPurchaseRequestItemExtras value);

}