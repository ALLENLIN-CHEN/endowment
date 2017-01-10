package org.scut.mychart.model;

public class IndustryModel {

    private Integer  person_num;
    private String   sex;
    private Integer  year;
    private Integer  month;
    private String   age;
    private String   industry_code;
    private String   company_type;
    private String   financial_type;
    private Double  cardinality;

    public Integer getMonth() {
        return month;
    }

    public void setMonth(Integer month) {
        this.month = month;
    }

    public String getCompany_type() {
        return company_type;
    }

    public void setCompany_type(String company_type) {
        this.company_type = company_type;
    }

    public String getFinancial_type() {
        return financial_type;
    }

    public void setFinancial_type(String financial_type) {
        this.financial_type = financial_type;
    }

    public void setIndustry_code(String industry_code) {
        this.industry_code = industry_code;
    }

    public String getIndustry_code() {
        return industry_code;
    }

    public Integer getPerson_num() {
        return person_num;
    }

    public String getSex() {
        return sex;
    }

    public Integer getYear() {
        return year;
    }

    public String getAge() {
        return age;
    }

    public Double getCardinality() {
        return cardinality;
    }

    public void setPerson_num(Integer person_num) {
        this.person_num = person_num;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public void setCardinality(Double cardinality) {
        this.cardinality = cardinality;
    }

}
